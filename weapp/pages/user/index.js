"use strict";

var _core = _interopRequireDefault(require('../../vendor.js')(0));

var _api = require('../../api/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {
    share_uid: '',
    is_shouquan: ''
  },
  methods: {
    checksq: function checksq() {
      var t = this;

      _core["default"].$wx('getSetting').then(function (res) {
        if (res.authSetting['scope.userInfo']) {
          t.is_shouquan = 1;

          _core["default"].$wx('getUserInfo').then(function (r) {
            t.login(r);
          });
        } else {
          t.is_shouquan = 0;
        }
      });
    },
    bindTopUser: function bindTopUser(pid) {
      (0, _api.bindTop)({
        pid: pid
      }).then(function () {});
    },
    login: function login(info) {
      var t = this;

      _core["default"].$wx('login').then(function (res) {
        info.code = res.code;
        info.share_uid = t.share_uid;
        (0, _api.login)(info).then(function (res) {
          if (res.sid) {
            _core["default"].$store.commit('setSID', res.sid);
          }

          var dvInfo = _core["default"].$store.state.deviceInfo;
          dvInfo.appversion = '3.1.4';
          (0, _api.getUserInfo)({
            deviceInfo: dvInfo
          }).then(function (res) {
            _core["default"].$store.commit('setUserInfo', res.datas);

            if (t.share_uid) {
              if (res.datas.is_binded) {
                t.bindTopUser(t.share_uid);
              } else {
                _core["default"].$store.commit('set_share_uid_from', '');
              }
            } else {
              _core["default"].$store.commit('set_share_uid_from', '');
            }

            t.$back();
          });
        })["catch"](function (res) {
          _core["default"].$.confirm('当前登录人数过多,请从新授权登录');

          t.is_shouquan = 0;
        });
      });
    },
    shouquan_getuserinfo: function shouquan_getuserinfo(e) {
      e = e.$wx;
      var t = this;

      if (e.detail.userInfo) {
        _core["default"].$.loading("登录中...");

        t.login(e.detail);
      } else {
        _core["default"].$.hideloading();

        _core["default"].$.confirm("请授权小程序获取微信基本信息", function () {}, false);
      }
    }
  },
  onLoad: function onLoad(e) {
    // wepy.$.loading('登录中...')
    // console.log(wepy.$.loading);
    if (e && e.share_uid) {
      this.share_uid = e.share_uid;
    }

    this.checksq();
  }
}, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'9-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.shouquan_getuserinfo($event)
      })();
    
  }}}, models: {} });