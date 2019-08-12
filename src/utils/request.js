import { getCache, setCache } from './utils'
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
    param.data.PHPSESSID = getCache('sid')
    param.data.form_ids = getFormIds()
    param.data = md5Sign(param.data)
    wx.request({
      ...param,
      success: (res) => {
        if (!res.status) {
          checkFailStatus(res.data, check)
        } else {
          resolve(res.data)
        }
      },
      fail: (res) => {
        console.log('网络错误')
        reject(res)
      },
      complete: () => {
        wx.stopPullDownRefresh()
      }
    })
  })
}
function getFormIds() {
  return []
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
    console.log('授权');
  } else if (res.info == "请先绑定手机号") {
    console.log('绑定手机号');
  } else if (res.info == "商品不存在或者已经下架") {
    hideloading();
    var tt = getCurrentPages().length;

    wx.showModal({
      showCancel: false,
      title: res.info,
      content: '',
      success: function(res) {
        // if (tt == 1) {
        //   wx.switchTab({
        //     url: '/pages/index/index',
        //   })
        // } else {
        //   wx.navigateBack({
        //     delta: 1,
        //   })
        // }
      }
    })
  }
}