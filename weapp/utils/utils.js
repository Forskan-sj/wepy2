"use strict";

var _store = _interopRequireDefault(require('../store/index.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function setCache(key, value) {
  try {
    wx.setStorageSync(key, value);
    console.log(key, value);
  } catch (e) {}
}

function getCache(key) {
  try {
    var value = wx.getStorageSync(key);

    if (value) {
      return value;
    }
  } catch (e) {}
}

function removeCache(key, t) {
  wx.removeStorage({
    key: key
  }).then(t);
}

function showTos(msg) {
  wx.showToast({
    title: msg,
    icon: 'none'
  });
} // function showtips()


function alert() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '成功';
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
  wx.showToast({
    icon: 'success',
    title: e || '成功',
    duration: t,
    success: function success() {
      n && setTimeout(n, t);
    }
  });
}

function loading() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '加载中...';
  var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  wx.showLoading({
    title: e,
    mask: m
  });
}

function hideloading() {
  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1500;

  if (wx.hideLoading) {
    wx.hideLoading();
  }

  var e = setTimeout(function () {
    wx.hideToast();
  }, t);
  clearTimeout(e);
}

function confirm() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '网络错误请稍后';
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var title = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  wx.showModal({
    title: title || '',
    content: e,
    showCancel: n,
    success: t
  });
} // 弹出框并返回上一页


function alertBack() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  var url = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  wx.showToast({
    icon: none,
    title: e,
    duration: t,
    success: function success() {
      setTimeout(function () {
        if (url) {
          wx.redirectTo({
            url: url
          });
        } else {
          wx.navigateBack({
            delta: 1
          });
        }
      }, t);
    }
  });
}

function previewImage() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var urls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (url.indexOf('?') !== -1) {
    url = url.substr(0, url.indexOf('?'));
  }

  for (var i in urls) {
    if (urls[i].indexOf('?') !== -1) {
      urls[i] = urls[i].substr(0, urls[i].indexOf('?'));
    }
  }

  wx.previewImage({
    current: url,
    urls: urls
  });
}

function trim() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return str.replace(/(^\s+)|(\s+$)/g, '');
}

function testing(content) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'str';

  if (!content) {
    showTos('参数丢失');
    return;
  }

  var ruls = '';

  switch (type) {
    case 'mobile':
      ruls = /^1[3456789]\d{9}$/;
      break;

    case 'card':
      ruls = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/;
      break;

    case 'username':
      ruls = /^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/;
      break;

    case 'price':
      ruls = /^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/;
      break;

    case 'password':
      ruls = /^.{4,20}$/;
      break;

    case 'num':
      ruls = /^([1-9][0-9]*)$/;
      break;

    default:
      ruls = /^.{1,500}$/;
      break;
  }

  return ruls.test(content);
}

function getstringwidth(text) {
  return text.replace(/[\u0391-\uFFE5]/g, 'aa').length;
}

function saveFormIds(formId) {
  console.log(formId);

  if (!formId || formId === 'the formId is a mock one') {
    return;
  }

  var formIds = _store["default"].state.formIds;
  formIds = formIds ? formIds + ',' + formId : formId;

  _store["default"].commit('setFormIds', formIds);
}

function getSceneParams(scene) {
  var params = getParas(scene);
  var page = getPage(params.f);
  var pagePras = getPageParas(params);
  var sceneParams = {
    uid: params.s,
    share_from: page,
    share_page: '/pages/' + page + '/' + page + (params.p ? pagePras : '')
  };
  return sceneParams;
}

function getParas(scene) {
  // scene=f_g-s_274-p_g.2528*p.128
  var obj = strToObj(scene, '-', '_');

  if (obj.p) {
    obj.p = strToObj(obj.p, '*', '.');
  }

  return obj;
}

function strToObj(str, seperator1, seperator2) {
  var arr = str.split(seperator1);
  var obj = {};

  for (var j = 0; j < arr.length; j++) {
    var str3s = arr[j];
    var para = str3s.split(seperator2);
    obj[para[0]] = para[1];
  }

  return obj;
}

function getPage(name) {
  var obj = {
    'i': 'index',
    'n': 'Newindex',
    'g': 'gooddetail',
    'p': 'huichangdetail',
    'l': 'live'
  };
  return obj[name];
}

function getPageParas(obj) {
  var page = getPage(obj.f);
  var paras = obj.p;
  var dic = {
    'gooddetail': {
      'p': 'place_id',
      'g': 'id'
    },
    'huichangdetail': {
      'p': 'id'
    }
  };
  var mirror = dic[page];
  var paraStr = '?';

  for (var k in paras) {
    paraStr = paraStr + mirror[k] + '=' + paras[k] + '&';
  }

  return paraStr;
} // function ht2xl(html) {
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
  var second = parseInt(value) || 0; // 秒

  var minute = 0; // 分

  var hour = 0; // 小时

  var day = 0; // 天

  if (second > 60) {
    minute = parseInt(second / 60);
    second = parseInt(second % 60);

    if (minute > 60) {
      hour = parseInt(minute / 60);
      minute = parseInt(minute % 60);

      if (hour > 24) {
        day = parseInt(hour / 24);
        hour = parseInt(hour % 24);
      }
    }
  }

  if (day < 10) {
    day = '0' + day;
  }

  if (hour < 10) {
    hour = '0' + hour;
  }

  if (minute < 10) {
    minute = '0' + minute;
  }

  if (second < 10) {
    second = '0' + second;
  }

  var time = {
    'day': day,
    'hour': hour,
    'minute': minute,
    'second': second
  };
  return time;
}

function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null;
  }

  var format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  var date;

  if (_typeof(time) === 'object') {
    date = time;
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000;
    date = new Date(time);
  }

  var formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  var timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, function (result, key) {
    var value = formatObj[key]; // Note: getDay() returns 0 on Sunday

    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value];
    }

    if (result.length > 0 && value < 10) {
      value = '0' + value;
    }

    return value || 0;
  });
  return timeStr;
} // 秒转为时分秒


function formatSeconds2(value) {
  var theTime = parseInt(value); // 秒

  var theTime1 = 0; // 分

  var theTime2 = 0; // 小时

  var theTime3 = 0; // 天

  if (theTime > 60) {
    theTime1 = parseInt(theTime / 60);
    theTime = parseInt(theTime % 60);

    if (theTime1 > 60) {
      theTime2 = parseInt(theTime1 / 60);
      theTime1 = parseInt(theTime1 % 60);

      if (theTime2 > 24) {
        theTime3 = parseInt(theTime2 / 24);
        theTime2 = parseInt(theTime2 % 24);
      }
    }
  }

  var result = '' + parseInt(theTime) + '秒';

  if (theTime1 > 0) {
    result = '' + parseInt(theTime1) + '分' + result;
  }

  if (theTime2 > 0) {
    result = '' + parseInt(theTime2) + '小时' + result;
  }

  if (theTime3 > 0) {
    result = '' + parseInt(theTime3) + '天' + result;
  }

  return result;
}

module.exports = {
  // 处理缓存
  setCache: setCache,
  getCache: getCache,
  removeCache: removeCache,
  // 弹窗
  showTos: showTos,
  alert: alert,
  loading: loading,
  hideloading: hideloading,
  confirm: confirm,
  alertBack: alertBack,
  // 图片预览
  previewImage: previewImage,
  // 字符去空格
  trim: trim,
  // 正则校验
  testing: testing,
  // 计算字符长度
  getstringwidth: getstringwidth,
  // 存储formId
  saveFormIds: saveFormIds,
  // 页面取参
  getParas: getParas,
  getPage: getPage,
  getPageParas: getPageParas,
  getSceneParams: getSceneParams,
  // 时间格式化
  formatSeconds: formatSeconds,
  formatSeconds2: formatSeconds2,
  parseTime: parseTime
};