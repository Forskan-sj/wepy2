import store from '../store'
function setCache(key, value) {
  try {
    wx.setStorageSync(key, value)
    console.log(key, value);
  } catch (e) { }
}

function getCache(key) {
  try {
    var value = wx.getStorageSync(key)
    if (value) {
      return value
    }
  } catch (e) {
  }
}

function removeCache(key, t) {
  wx.removeStorage({ key }).then(t)
}

function showTos(msg) {
  wx.showToast({
    title: msg,
    icon: 'none'
  })
}

// function showtips()

function alert(e = '成功', t = 1000, n = () => {}) {
  wx.showToast({
    icon: 'success',
    title: e || '成功',
    duration: t,
    success: () => {
      n && setTimeout(n, t);
    }
  })
}

function loading(e = '加载中...', m = false) {
  wx.showLoading({
    title: e,
    mask: m
  })
}

function hideloading(t = 1500) {
  if (wx.hideLoading) {
    wx.hideLoading()
  }
  const e = setTimeout(() => {
    wx.hideToast()
  }, t);
  clearTimeout(e)
}

function confirm(e = '网络错误请稍后', t = () => {}, n = 0, title = '') {
  wx.showModal({
    title: title || '',
    content: e,
    showCancel: n,
    success: t
  })
}

// 弹出框并返回上一页
function alertBack(e = '', t = 1000, url = '') {
  wx.showToast({
    icon: none,
    title: e,
    duration: t,
    success: () => {
      setTimeout(() => {
        if (url) {
          wx.redirectTo({
            url
          })
        } else {
          wx.navigateBack({
            delta: 1
          })
        }
      }, t);
    }
  })
}

function previewImage(url = '', urls = []) {
  if (url.indexOf('?') !== -1) {
    url = url.substr(0, url.indexOf('?'))
  }
  for (let i in urls) {
    if (urls[i].indexOf('?') !== -1) {
      urls[i] = urls[i].substr(0, urls[i].indexOf('?'))
    }
  }
  wx.previewImage({
    current: url,
    urls
  })
}

function trim(str = '') {
  return str.replace(/(^\s+)|(\s+$)/g, '')
}

function testing(content, type = 'str') {
  if (!content) {
    showTos('参数丢失')
    return
  }
  let ruls = ''
  switch (type) {
    case 'mobile':
      ruls = /^1[3456789]\d{9}$/
      break
    case 'card':
      ruls = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/
      break
    case 'username':
      ruls = /^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/
      break
    case 'price':
      ruls = /^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/
      break
    case 'password':
      ruls = /^.{4,20}$/
      break
    case 'num':
      ruls = /^([1-9][0-9]*)$/
      break
    default:
      ruls = /^.{1,500}$/
      break
  }
  return ruls.test(content)
}

function getstringwidth(text) {
  return text.replace(/[\u0391-\uFFE5]/g, 'aa').length
}

function saveFormIds(formId) {
  if (!formId || formId === 'the formId is a mock one') {
    return
  }
  let formIds = store.state.formIds
  formIds = formIds ? formIds + ',' + formId : formId
  store.commit('setFormIds', formIds)
}

function getSceneParams(scene) {
  let params = getParas(scene)
  let page = getPage(params.f)
  let pagePras = getPageParas(params)
  let sceneParams = {
    uid: params.s,
    share_from: page,
    share_page: '/pages/' + page + '/' + page + (params.p ? pagePras : '')
  }
  return sceneParams
}

function getParas(scene) {
  // scene=f_g-s_274-p_g.2528*p.128
  let obj = strToObj(scene, '-', '_')
  if (obj.p) {
    obj.p = strToObj(obj.p, '*', '.')
  }
  return obj
}
function strToObj(str, seperator1, seperator2) {
  let arr = str.split(seperator1)
  let obj = {}
  for (let j = 0; j < arr.length; j++) {
    let str3s = arr[j]
    let para = str3s.split(seperator2)
    obj[para[0]] = para[1]
  }
  return obj
}
function getPage(name) {
  const obj = {
    'i': 'index',
    'n': 'Newindex',
    'g': 'gooddetail',
    'p': 'huichangdetail',
    'l': 'live'
  }
  return obj[name]
}
function getPageParas(obj) {
  let page = getPage(obj.f)
  let paras = obj.p
  let dic = {
    'gooddetail': {
      'p': 'place_id',
      'g': 'id'
    },
    'huichangdetail': {
      'p': 'id'
    }
  }
  let mirror = dic[page]
  let paraStr = '?'
  for (let k in paras) {
    paraStr = paraStr + mirror[k] + '=' + paras[k] + '&'
  }
  return paraStr
}
// function ht2xl(html) {
//   const temp = html.replace(/<div/g, '<view')
//     .replace(/<\/div>/g, '/view>')
//     .replace(/<p/g, '<view')
//     .replace(/<\/p>/g, '/view>')
//     .replace(/<span/g, '<text')
//     .replace(/\/span>/g, '/text>')
//     .replace(/↵/g, '')
//     .replace(/&mdash/g, '——')
//     .replace(/&ldquo;/g, ''')
//     .replace(/&rdquo;/g, ' ')

//   console.log(temp.split('/view>'))
//   // return
//     // .replace(/<div>/g, '<view>')
//     // .replace(/<div>/g, '<view>')
// }

// 时分秒转换
function formatSeconds(value, callback) {
  let second = parseInt(value) || 0 // 秒
  let minute = 0 // 分
  let hour = 0 // 小时
  let day = 0 // 天
  if (second > 60) {
    minute = parseInt(second / 60)
    second = parseInt(second % 60)
    if (minute > 60) {
      hour = parseInt(minute / 60)
      minute = parseInt(minute % 60)
      if (hour > 24) {
        day = parseInt(hour / 24)
        hour = parseInt(hour % 24)
      }
    }
  }
  if (day < 10) {
    day = '0' + day
  }
  if (hour < 10) {
    hour = '0' + hour
  }
  if (minute < 10) {
    minute = '0' + minute
  }
  if (second < 10) {
    second = '0' + second
  }
  const time = {
    'day': day,
    'hour': hour,
    'minute': minute,
    'second': second
  }
  return time
}

function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return timeStr
}
// 秒转为时分秒
function formatSeconds2(value) {
  let theTime = parseInt(value) // 秒
  let theTime1 = 0 // 分
  let theTime2 = 0 // 小时
  let theTime3 = 0 // 天
  if (theTime > 60) {
    theTime1 = parseInt(theTime / 60)
    theTime = parseInt(theTime % 60)
    if (theTime1 > 60) {
      theTime2 = parseInt(theTime1 / 60)
      theTime1 = parseInt(theTime1 % 60)
      if (theTime2 > 24) {
        theTime3 = parseInt(theTime2 / 24)
        theTime2 = parseInt(theTime2 % 24)
      }
    }
  }
  var result = '' + parseInt(theTime) + '秒'
  if (theTime1 > 0) {
    result = '' + parseInt(theTime1) + '分' + result
  }
  if (theTime2 > 0) {
    result = '' + parseInt(theTime2) + '小时' + result
  }
  if (theTime3 > 0) {
    result = '' + parseInt(theTime3) + '天' + result
  }
  return result
}

module.exports = {
  // 处理缓存
  setCache,
  getCache,
  removeCache,

  // 弹窗
  showTos,
  alert,
  loading,
  hideloading,
  confirm,
  alertBack,

  // 图片预览
  previewImage,

  // 字符去空格
  trim,

  // 正则校验
  testing,

  // 计算字符长度
  getstringwidth,

  // 存储formId
  saveFormIds,

  // 页面取参
  getParas,
  getPage,
  getPageParas,
  getSceneParams,

  // 时间格式化
  formatSeconds,
  formatSeconds2,
  parseTime

}