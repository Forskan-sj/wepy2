

export default {
  data: {
    mixin: 'MixinTe333xt'
  },
  methods: {
    mixintap () {
      this.mixin = 'MixinText' + (Math.random() + '').substring(3, 7);
      // console.log('mixin method tapdddd');
    },
    tap () {
      // console.log('tap in mixin');
    }
  },
  created () {
    // console.log('created in mixin');
  }
}
