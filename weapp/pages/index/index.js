"use strict";

var _index = require('../../api/index.js');

var _core = _interopRequireDefault(require('../../vendor.js')(0));

var _x = require('../../vendor.js')(1);

var _store = _interopRequireDefault(require('../../store/index.js'));

var _test = _interopRequireDefault(require('../../mixins/test.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  store: _store["default"],
  data: {
    isdata: false,
    shareInfo: '',
    swiperList: [],
    faddishlist: [],
    Anchorinfo: {},
    isAnchor: false,
    hbinfo: {},
    ishbfix: false,
    tabList: [],
    curSwiperIndex: 0
  },
  mixins: [_test["default"]],
  computed: {},
  methods: {
    swiperChange: function swiperChange(e) {
      this.curSwiperIndex = e.$wx.detail.current;
    },
    getbaolist: function getbaolist(res) {},
    getShare: function getShare() {
      var t = this;
      wx.request({
        url: 'https://img.jinrijianlou.com/Api/index_share.json',
        success: function success(res) {
          _core["default"].$store.commit('setwWlcome', res.data.datas.welcome);

          t.shareInfo = res.data.datas;
        }
      });
    }
  },
  created: function created() {
    var t = this;
    (0, _index.getAllData)({}, false).then(function (re) {
      var res = re.datas;
      t.getShare();
      t.getbaolist(res.faddish);
      t.swiperList = res.ad;
      t.faddishlist = res.faddish1;
      t.Anchorinfo = res.anchor;
      t.isAnchor = true;
      t.hbinfo = res.kaquan;
      t.ishbfix = res.kaquan.draw_status == 1;
      t.tabList = res.tabInfo;
      t.isdata = true;
    });
  },
  onPullDownRefresh: function onPullDownRefresh() {
    wx.stopPullDownRefresh();
  }
}, {info: {"components":{"beforeLoad":{"path":"..\\..\\components\\beforeLoad"},"swiperLive":{"path":"..\\..\\components\\baseCom\\swiperLive"}},"on":{}}, handlers: {'8-26': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.swiperChange($event)
      })();
    
  }},'8-27': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.cllectformid($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"beforeLoad":{"path":"..\\..\\components\\beforeLoad"},"swiperLive":{"path":"..\\..\\components\\baseCom\\swiperLive"}},"on":{}}, handlers: {'8-26': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.swiperChange($event)
      })();
    
  }},'8-27': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.cllectformid($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"beforeLoad":{"path":"..\\..\\components\\beforeLoad"},"swiperLive":{"path":"..\\..\\components\\baseCom\\swiperLive"}},"on":{}}, handlers: {'8-26': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.swiperChange($event)
      })();
    
  }},'8-27': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.cllectformid($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"beforeLoad":{"path":"..\\..\\components\\beforeLoad"},"swiperLive":{"path":"..\\..\\components\\baseCom\\swiperLive"}},"on":{}}, handlers: {'8-26': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.swiperChange($event)
      })();
    
  }},'8-27': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.cllectformid($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"beforeLoad":{"path":"..\\..\\components\\beforeLoad"},"swiperLive":{"path":"..\\..\\components\\baseCom\\swiperLive"}},"on":{}}, handlers: {'8-26': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.swiperChange($event)
      })();
    
  }},'8-27': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.cllectformid($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"beforeLoad":{"path":"..\\..\\components\\beforeLoad"},"swiperLive":{"path":"..\\..\\components\\baseCom\\swiperLive"}},"on":{}}, handlers: {'8-26': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.swiperChange($event)
      })();
    
  }},'8-27': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.cllectformid($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"beforeLoad":{"path":"..\\..\\components\\beforeLoad"},"swiperLive":{"path":"..\\..\\components\\baseCom\\swiperLive"}},"on":{}}, handlers: {'8-26': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.swiperChange($event)
      })();
    
  }},'8-27': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.cllectformid($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"beforeLoad":{"path":"..\\..\\components\\beforeLoad"},"swiperLive":{"path":"..\\..\\components\\baseCom\\swiperLive"}},"on":{}}, handlers: {'8-26': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.swiperChange($event)
      })();
    
  }},'8-27': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.cllectformid($event)
      })();
    
  }}}, models: {} });