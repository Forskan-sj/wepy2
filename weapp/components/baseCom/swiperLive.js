"use strict";

var _core = _interopRequireDefault(require('../../vendor.js')(0));

var _test = _interopRequireDefault(require('../../mixins/test.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  props: {
    anchorInfo: {},
    faddishlist: {}
  },
  mixins: [_test["default"]],
  methods: {
    // 前往直播
    gozhibo: function gozhibo() {
      if (this.anchorInfo.type) {
        wx.navigateTo({
          url: '/pages/live/live'
        });
      } else {
        wx.navigateTo({
          url: '/pages/playback/playback'
        });
      }
    }
  },
  created: function created() {}
}, {info: {"components":{},"on":{}}, handlers: {'15-44': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gozhibo($event)
      })();
    
  }},'15-45': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.cllectformid($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'15-44': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gozhibo($event)
      })();
    
  }},'15-45': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.cllectformid($event)
      })();
    
  }}}, models: {} });