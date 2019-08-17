"use strict";

var _index = require('../api/index.js');

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _x = require('../vendor.js')(2);

var _store = _interopRequireDefault(require('../store/index.js'));

var _test = _interopRequireDefault(require('../mixins/test.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isFunc = function isFunc(v) {
  return typeof v === 'function';
};

function fs(type) {
  return new Promise(function (resolve, reject) {
    if (isFunc(wx[type])) {
      wx[type]({
        success: function success(data) {
          resolve(data);
        },
        failed: function failed(error) {
          reject(error);
        }
      });
    }
  });
}

_core["default"].page({
  store: _store["default"],
  hooks: {
    // Page 级别 hook, 只对当前 Page 的 setData 生效。
    'before-setData': function beforeSetData(dirty) {
      if (Math.random() < 0.2) {
        // console.log('setData canceled');
        return false; // Cancel setData
      }

      dirty.time = +new Date();
      return dirty;
    }
  },
  mixins: [_test["default"]],
  data: {
    imgUrls: [{
      url: 'https://muxi-college.oss-cn-qingdao.aliyuncs.com/dev_test_dcaredata/data1544770590186.mp4',
      play: true
    }, {
      url: 'https://muxi-college.oss-cn-qingdao.aliyuncs.com/dev_test_dcaredata/02.%E5%9C%88%E6%A1%86%E5%87%B8%E6%98%BE%E6%A0%87%E8%AE%B0%E5%88%B6%E4%BD%9C.mp4',
      play: false
    }, {
      url: 'https://muxi-college.oss-cn-qingdao.aliyuncs.com/dev_test_dcaredata/data1544770590186.mp4',
      play: false
    }],
    inputmodel: 'v-model',
    mynum: 20,
    userInfo: {
      nickName: '加载中...'
    },
    currentTime: +new Date(),
    setTimeoutTitle: '标题三秒后会被修改',
    count: 0,
    netrst: '',
    groupList: [{
      id: 1,
      name: '点击改变',
      list: [{
        childid: '1.1',
        childname: '子项，点我改变'
      }, {
        childid: '1.2',
        childname: '子项，点我改变'
      }, {
        childid: '1.3',
        childname: '子项，点我改变'
      }]
    }, {
      id: 2,
      name: '点击改变',
      list: [{
        childid: '2.1',
        childname: '子项，点我改变'
      }, {
        childid: '2.2',
        childname: '子项，点我改变'
      }, {
        childid: '2.3',
        childname: '子项，点我改变'
      }]
    }, {
      id: 3,
      name: '点击改变',
      list: [{
        childid: '3.1',
        childname: '子项，点我改变'
      }]
    }]
  },
  computed: _objectSpread({}, (0, _x.mapState)(['counter']), {
    testcomputed: function testcomputed() {
      return 'computed - ' + this.mynum;
    }
  }),
  methods: {
    jump: function jump(obj) {
      // console.log(this, obj, this.$navigate);
      // this.$preload('test', {ss: 'contest', a: 'asdfasdf'})
      this.$navigate('page2', {
        param: JSON.stringify({
          a: '1',
          b: 'sdf',
          c: [1, 2]
        })
      });
    },
    tap: function tap() {
      throw 'can not go here';
    },
    plus: function plus() {
      this.mynum++;
    },
    toast: function toast() {
      var promise = this.$invoke('toast', 'show', {
        title: '自定义标题',
        img: 'https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png'
      });
      promise.then(function (d) {
        console.log('toast done');
      });
    },
    mixintap: function mixintap() {
      console.log('do noting from ' + this.$is);
    },
    communicate: function communicate() {
      var counters = this.$children.filter(function (com) {
        return com.$is === 'components/counter';
      }); // Get children counter

      counters[0].num++;
      counters[1].num--;

      _core["default"].$eventHub.$emit('app-launch', {
        a: 1
      }, {
        b: 2
      });
    },
    request: function request() {
      var self = this;
      var i = 10;
      var map = ['MA==', 'MQo=', 'Mg==', 'Mw==', 'NA==', 'NQ==', 'Ng==', 'Nw==', 'OA==', 'OQ=='];

      while (i--) {
        wx.request({
          url: 'https://www.madcoder.cn/tests/sleep.php?time=1&t=css&c=' + map[i] + '&i=' + i,
          success: function success(d) {
            if (d.statusCode !== 200) {
              self.netrst += d.statusCode + '.';
            } else {
              self.netrst += d.data + '.';
            }
          }
        });
      }
    },
    counterEmit: function counterEmit(num) {
      console.log("".concat(this.$is, " receive event, the number is: ").concat(num));
    }
  },
  created: function created() {
    // console.log(this.$route('navigate', 'page2', {a: '1', b: false, c: [1,2]}));
    // wx.getSystemInfo({
    //   success (res) {
    //     console.log(res);
    //   }
    // })
    // console.log(this.$store.state.counter);
    console.log(this.$app.$options.globalData);
    (0, _index.getUserInfo)({
      id: 1
    }).then(function (res) {
      console.log(res);
    });

    _core["default"].$wx('getSystemInfo').then(function (res) {
      // console.log(res);
      _core["default"].$store.commit('setDeviceInfo', res);
    });

    var self = this;
    self.currentTime = +new Date();
    self.setTimeoutTitle = '标题三秒后会被修改';
    setTimeout(function () {
      self.setTimeoutTitle = '到三秒了';
    }, 3000); // wx.getUserInfo({
    //   success (res) {
    //     console.log(res);
    //     self.userInfo = res.userInfo;
    //   }
    // });
    // this.$store.commit('set_share_uid_from', 3412)
    // console.log(this.$store.state.counter);
  },
  onPullDownRefresh: function onPullDownRefresh() {
    // this.getalldata();
    // this.$store.commit('increment')
    // console.log(this.$store.state.counter);
    wx.stopPullDownRefresh();
  }
}, {info: {"components":{"list":{"path":"../components/wepy-list"},"group":{"path":"../components/group"},"beforeLoad":{"path":"../components/beforeLoad"},"panel":{"path":"../components/panel"},"counter":{"path":"../components/counter"},"slide-view":{"path":"../$vendor/miniprogram-slide-view/miniprogram_dist/index"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"list":{"path":"../components/wepy-list"},"group":{"path":"../components/group"},"beforeLoad":{"path":"../components/beforeLoad"},"panel":{"path":"../components/panel"},"counter":{"path":"../components/counter"},"slide-view":{"path":"../$vendor/miniprogram-slide-view/miniprogram_dist/index"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"list":{"path":"../components/wepy-list"},"group":{"path":"../components/group"},"beforeLoad":{"path":"../components/beforeLoad"},"panel":{"path":"../components/panel"},"counter":{"path":"../components/counter"},"slide-view":{"path":"../$vendor/miniprogram-slide-view/miniprogram_dist/index"}},"on":{}}, handlers: {}, models: {} });