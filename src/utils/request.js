import store from '../store';
const $ = require('@/utils/utils')
// import { reLogin } from '../api'
import MD5 from './md5'
// const baseUrl = 'https://m_college.quansuwangluo.com/api/app/'
const baseUrl = 'https://devlmzg.jinrijianlou.com/'

export default function request(param, check = false) {
  param.url = baseUrl + param.url
  param.header = {
    'content-type': 'application/x-www-form-urlencoded',
    'version': '3.1.4'
  }
  wx.showLoading({title: '数据加载中'})
  return new Promise((resolve, reject) => {
    wx.hideLoading()
    param.data.PHPSESSID = store.state.sid
    if (getFormIds()) {
      param.data.form_ids = getFormIds()
    }
    // deviceInfo为对象，md5加密报错，故此先行移除，加密之后再添加
    const te = param.data.deviceInfo ? param.data.deviceInfo : ''
    delete param.data.deviceInfo

    param.data = md5Sign(param.data)
    if (te) {
      param.data.deviceInfo = te
    }
    wx.request({
      ...param,
      success: (res) => {
        if (!res.data.status) {
          checkFailStatus(res.data, check)
        } else {
          resolve(res.data)
        }
      },
      fail: (res) => {
        $.confirm()
        reject(res.data)
      },
      complete: () => {
        wx.stopPullDownRefresh()
      }
    })
  })
}
function getFormIds() {
  let formIds = store.state.formIds
  if (formIds) {
    const formIdArr = formIds.split(',')
    if (formIdArr.length > 5) {
      const formids_pre = formIdArr.slice(0, 5)
      formIds = formids_pre.join(',')
      store.commit('setFormIds', formIdArr.slice(5).join(','))
      return formIds
    } else {
      store.commit('setFormIds', '')
    }
  }
  return ''
}

function md5Sign(param) {
  var SignSort = []
  var TimeStamp = Math.round(+new Date().getTime() / 1000)
  var RandomStr = Array(32).fill().map(() => {
    return String.fromCharCode(0x60 + Math.round(Math.random() * 25 + 1))
  }).join('')
  param.TimeStamp = TimeStamp
  param.RandomStr = RandomStr
  for (var sKey in param) {
    if (param[sKey] != 'undefined' && param[sKey] != undefined && param[sKey] !== '') {
      SignSort.push(sKey + '=' + param[sKey])
    } else {
      delete param[sKey]
    }
  }
  SignSort.sort()
  SignSort.push('NEEDKEY=2NGUcn54AGRnZvVS')
  param.NEEDSIGN = MD5(SignSort.join('&')).toUpperCase()
  return param
}

function checkFailStatus(res, check) {
  if ((res.info == "请先登录" || res.info == "授权已过期") && check) {
    wx.navigateTo({
      url: '/pages/login/shouquan' + (store.state.share_uid_from ? '?share_uid=' + store.state.share_uid_from : '')
    })
  } else if (res.info == "请先绑定手机号") {
    $.confirm('为了确保您的账户安全和提供更好的服务,平台需要您绑定手机号', () => {
      wx.navigateTo({
        url: '/pages/user-bindmobile/user-bindmobile'
      })
    })
  } else if (res.info == "商品不存在或者已经下架") {
    hideloading();
    var tt = getCurrentPages().length

    wx.showModal({
      showCancel: false,
      title: res.info,
      content: '',
      success: function(res) {
        if (tt == 1) {
          wx.switchTab({
            url: '/pages/index/index',
          })
        } else {
          wx.navigateBack({
            delta: 1,
          })
        }
      }
    })
  } else {
    console.log(res);
    $.confirm(res.info, () => {})
  }
}