"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = request;

var _utils = require('utils.js');

var _md = _interopRequireDefault(require('md5.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// const baseUrl = 'https://m_college.quansuwangluo.com/api/app/'
var baseUrl = 'https://devlmzg.jinrijianlou.com/';

function request(param) {
  var check = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  param.url = baseUrl + param.url;
  param.header = {
    'content-type': 'application/x-www-form-urlencoded',
    'version': '3.1.4'
  };
  wx.showLoading({
    title: '数据加载中'
  });
  return new Promise(function (resolve, reject) {
    wx.hideLoading();
    param.data.PHPSESSID = (0, _utils.getCache)('sid');
    param.data.form_ids = getFormIds();
    param.data = md5Sign(param.data);
    wx.request(_objectSpread({}, param, {
      success: function success(res) {
        if (!res.status) {
          checkFailStatus(res.data, check);
        } else {
          resolve(res.data);
        }
      },
      fail: function fail(res) {
        console.log('网络错误');
        reject(res);
      },
      complete: function complete() {
        wx.stopPullDownRefresh();
      }
    }));
  });
}

function getFormIds() {
  return [];
}

function md5Sign(param) {
  var SignSort = [];
  var TimeStamp = Math.round(+new Date().getTime() / 1000);
  var RandomStr = Array(32).fill().map(function () {
    return String.fromCharCode(0x60 + Math.round(Math.random() * 25 + 1));
  }).join('');
  param.TimeStamp = TimeStamp;
  param.RandomStr = RandomStr;

  for (var sKey in param) {
    if (param[sKey] != 'undefined' && param[sKey] != undefined && param[sKey] !== '') {
      SignSort.push(sKey + '=' + param[sKey]);
    } else {
      delete param[sKey];
    }
  }

  SignSort.sort();
  SignSort.push('NEEDKEY=2NGUcn54AGRnZvVS');
  param.NEEDSIGN = (0, _md["default"])(SignSort.join('&')).toUpperCase();
  return param;
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
      success: function success(res) {// if (tt == 1) {
        //   wx.switchTab({
        //     url: '/pages/index/index',
        //   })
        // } else {
        //   wx.navigateBack({
        //     delta: 1,
        //   })
        // }
      }
    });
  }
}