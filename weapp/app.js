"use strict";

var _core = _interopRequireDefault(require('vendor.js')(0));

var _eventHub = _interopRequireDefault(require('common/eventHub.js'));

var _store = _interopRequireDefault(require('store/index.js'));

var _x = _interopRequireDefault(require('vendor.js')(2));

var _wxapi = _interopRequireDefault(require('utils/wxapi.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].use(_x["default"]);

_core["default"].$eventHub = _eventHub["default"];
_core["default"].$wx = _wxapi["default"];
_core["default"].$ = require('utils/utils.js');
_core["default"].$store = _store["default"];

_core["default"].app({
  hooks: {},
  globalData: {
    isLogin: false,
    deviceinfo: {},
    userInfo: null,
    ceshi: 'ssss22'
  },
  onLaunch: function onLaunch(e) {
    var t = this;

    if (e.query.scene) {
      var paras = _core["default"].$.getParas(e.query.scene);

      if (!_core["default"].$.getCache('share_ud') && paras.s) {
        _core["default"].$.setCache('share_uid', paras.s);
      }
    }

    if (!_core["default"].$.getCache('share_uid') && e.query.share_uid) {
      _core["default"].$.setCache('share_uid', e.query.share_uid);
    }

    var updateManager = wx.getUpdateManager();
    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '提示',
        content: '发现有更新，即将重启小程序',
        success: function success(res) {
          if (res.confirm) {
            updateManager.applyUpdate();
          }
        }
      });
    });

    if (_core["default"].$.getCache('sid')) {
      this.$options.globalData.sid = _core["default"].$.getCache('sid');
    }

    _core["default"].$wx('getSystemInfo').then(function (res) {
      t.$options.globalData.deviceinfo = res;
    });
  },
  methods: {}
}, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} });