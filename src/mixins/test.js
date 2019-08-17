
import wepy from '@wepy/core';
export default {
  data: {
    mixin: ''
  },
  methods: {
    cllectformid: function (e) {
      wepy.$.saveFormIds(e.$wx.detail.formId);
    },
  },
  created () {
  }
}
