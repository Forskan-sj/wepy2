"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = request;

var _store = _interopRequireDefault(require('../store/index.js'));

var _md = _interopRequireDefault(require('md5.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var $ = require('utils.js'); // import { reLogin } from '../api'


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
    param.data.PHPSESSID = _store["default"].state.sid;

    if (getFormIds()) {
      param.data.form_ids = getFormIds();
    } // deviceInfo为对象，md5加密报错，故此先行移除，加密之后再添加


    var te = param.data.deviceInfo ? param.data.deviceInfo : '';
    delete param.data.deviceInfo;
    param.data = md5Sign(param.data);

    if (te) {
      param.data.deviceInfo = te;
    }

    wx.request(_objectSpread({}, param, {
      success: function success(res) {
        if (!res.data.status) {
          checkFailStatus(res.data, check);
        } else {
          resolve(res.data);
        }
      },
      fail: function fail(res) {
        $.confirm();
        reject(res.data);
      },
      complete: function complete() {
        wx.stopPullDownRefresh();
      }
    }));
  });
}

function getFormIds() {
  var formIds = _store["default"].state.formIds;

  if (formIds) {
    var formIdArr = formIds.split(',');

    if (formIdArr.length > 5) {
      var formids_pre = formIdArr.slice(0, 5);
      formIds = formids_pre.join(',');

      _store["default"].commit('setFormIds', formIdArr.slice(5).join(','));

      return formIds;
    } else {
      _store["default"].commit('setFormIds', '');
    }
  }

  return '';
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
    wx.navigateTo({
      url: '/pages/login/shouquan' + (_store["default"].state.share_uid_from ? '?share_uid=' + _store["default"].state.share_uid_from : '')
    });
  } else if (res.info == "请先绑定手机号") {
    $.confirm('为了确保您的账户安全和提供更好的服务,平台需要您绑定手机号', function () {
      wx.navigateTo({
        url: '/pages/user-bindmobile/user-bindmobile'
      });
    });
  } else if (res.info == "商品不存在或者已经下架") {
    hideloading();
    var tt = getCurrentPages().length;
    wx.showModal({
      showCancel: false,
      title: res.info,
      content: '',
      success: function success(res) {
        if (tt == 1) {
          wx.switchTab({
            url: '/pages/index/index'
          });
        } else {
          wx.navigateBack({
            delta: 1
          });
        }
      }
    });
  } else {
    console.log(res);
    $.confirm(res.info, function () {});
  }
}