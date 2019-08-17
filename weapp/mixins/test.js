"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  data: {
    mixin: ''
  },
  methods: {
    cllectformid: function cllectformid(e) {
      _core["default"].$.saveFormIds(e.$wx.detail.formId);
    }
  },
  created: function created() {}
};
exports["default"] = _default;