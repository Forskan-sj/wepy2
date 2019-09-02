"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _x = _interopRequireDefault(require('../vendor.js')(2));

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].use(_x["default"]);

var _default = new _x["default"].Store({
  state: {
    counter: 0,
    formIds: '',
    sid: '',
    share_uid_from: '',
    // 从分享链接进来的uid
    userInfo: {},
    // 用户信息
    welcome: {} // 设备信息

  },
  mutations: {
    increment: function increment(state) {
      state.counter++;
    },
    decrement: function decrement(state) {
      state.counter--;
    },
    setFormIds: function setFormIds(state, val) {
      state.formIds = val;
    },
    setSID: function setSID(state, val) {
      state.sid = val;
    },
    setUserInfo: function setUserInfo(state, val) {
      state.userInfo = val;
    },
    setwWlcome: function setwWlcome(state, val) {
      state.welcome = val;
    },
    set_share_uid_from: function set_share_uid_from(state, val) {
      state.share_uid_from = val;
    }
  },
  actions: {
    increment: function increment(_ref) {
      var commit = _ref.commit;
      commit('increment');
    },
    decrement: function decrement(_ref2) {
      var commit = _ref2.commit;
      commit('decrement');
    },
    incrementAsync: function incrementAsync(_ref3) {
      var commit = _ref3.commit;
      setTimeout(function () {
        commit('increment');
      }, 1000);
    }
  }
});

exports["default"] = _default;