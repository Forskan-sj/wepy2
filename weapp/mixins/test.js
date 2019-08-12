"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  data: {
    mixin: 'MixinTe333xt'
  },
  methods: {
    mixintap: function mixintap() {
      this.mixin = 'MixinText' + (Math.random() + '').substring(3, 7); // console.log('mixin method tapdddd');
    },
    tap: function tap() {// console.log('tap in mixin');
    }
  },
  created: function created() {// console.log('created in mixin');
  }
};
exports["default"] = _default;