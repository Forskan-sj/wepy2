"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _eventHub = _interopRequireDefault(require('../common/eventHub.js'));

var _x = require('../vendor.js')(2);

var _store = _interopRequireDefault(require('../store/index.js'));

var _test = _interopRequireDefault(require('../mixins/test.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_core["default"].page({
  store: _store["default"],
  config: {
    navigationBarTitleText: 'test'
  },
  hooks: {
    // Page 级别 hook, 只对当前 Page 的 setData 生效。
    'before-setData': function beforeSetData(dirty) {
      if (Math.random() < 0.2) {
        console.log('setData canceled');
        return false; // Cancel setData
      }

      dirty.time = +new Date();
      return dirty;
    }
  },
  mixins: [_test["default"]],
  data: {},
  computed: _objectSpread({}, (0, _x.mapState)(['counter']), {
    testcomputed: function testcomputed() {
      return 'computed - ' + this.mynum;
    }
  }),
  methods: {
    goback: function goback() {
      this.$back();
    }
  },
  created: function created(id, param) {},
  onPrefetch: function onPrefetch(data) {
    console.log('prefetch' + data);
  },
  onLoad: function onLoad(id) {
    console.log(this.$store.state.counter);
    console.log(decodeURIComponent(id.param), JSON.parse(decodeURIComponent(id.param)));
  }
}, {info: {"components":{"list":{"path":"../components/wepy-list"},"group":{"path":"../components/group"},"panel":{"path":"../components/panel"},"counter":{"path":"../components/counter"},"slide-view":{"path":"../$vendor/miniprogram-slide-view/miniprogram_dist/index"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goback($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"list":{"path":"../components/wepy-list"},"group":{"path":"../components/group"},"panel":{"path":"../components/panel"},"counter":{"path":"../components/counter"},"slide-view":{"path":"../$vendor/miniprogram-slide-view/miniprogram_dist/index"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goback($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"list":{"path":"../components/wepy-list"},"group":{"path":"../components/group"},"panel":{"path":"../components/panel"},"counter":{"path":"../components/counter"},"slide-view":{"path":"../$vendor/miniprogram-slide-view/miniprogram_dist/index"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goback($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"list":{"path":"../components/wepy-list"},"group":{"path":"../components/group"},"panel":{"path":"../components/panel"},"counter":{"path":"../components/counter"},"slide-view":{"path":"../$vendor/miniprogram-slide-view/miniprogram_dist/index"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goback($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"list":{"path":"../components/wepy-list"},"group":{"path":"../components/group"},"panel":{"path":"../components/panel"},"counter":{"path":"../components/counter"},"slide-view":{"path":"../$vendor/miniprogram-slide-view/miniprogram_dist/index"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goback($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"list":{"path":"../components/wepy-list"},"group":{"path":"../components/group"},"panel":{"path":"../components/panel"},"counter":{"path":"../components/counter"},"slide-view":{"path":"../$vendor/miniprogram-slide-view/miniprogram_dist/index"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goback($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"list":{"path":"../components/wepy-list"},"group":{"path":"../components/group"},"panel":{"path":"../components/panel"},"counter":{"path":"../components/counter"},"slide-view":{"path":"../$vendor/miniprogram-slide-view/miniprogram_dist/index"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goback($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"list":{"path":"../components/wepy-list"},"group":{"path":"../components/group"},"panel":{"path":"../components/panel"},"counter":{"path":"../components/counter"},"slide-view":{"path":"../$vendor/miniprogram-slide-view/miniprogram_dist/index"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goback($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"list":{"path":"../components/wepy-list"},"group":{"path":"../components/group"},"panel":{"path":"../components/panel"},"counter":{"path":"../components/counter"},"slide-view":{"path":"../$vendor/miniprogram-slide-view/miniprogram_dist/index"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goback($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"list":{"path":"../components/wepy-list"},"group":{"path":"../components/group"},"panel":{"path":"../components/panel"},"counter":{"path":"../components/counter"},"slide-view":{"path":"../$vendor/miniprogram-slide-view/miniprogram_dist/index"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goback($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"list":{"path":"../components/wepy-list"},"group":{"path":"../components/group"},"panel":{"path":"../components/panel"},"counter":{"path":"../components/counter"},"slide-view":{"path":"../$vendor/miniprogram-slide-view/miniprogram_dist/index"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goback($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"list":{"path":"../components/wepy-list"},"group":{"path":"../components/group"},"panel":{"path":"../components/panel"},"counter":{"path":"../components/counter"},"slide-view":{"path":"../$vendor/miniprogram-slide-view/miniprogram_dist/index"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goback($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"list":{"path":"../components/wepy-list"},"group":{"path":"../components/group"},"panel":{"path":"../components/panel"},"counter":{"path":"../components/counter"},"slide-view":{"path":"../$vendor/miniprogram-slide-view/miniprogram_dist/index"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goback($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"list":{"path":"../components/wepy-list"},"group":{"path":"../components/group"},"panel":{"path":"../components/panel"},"counter":{"path":"../components/counter"},"slide-view":{"path":"../$vendor/miniprogram-slide-view/miniprogram_dist/index"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goback($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"list":{"path":"../components/wepy-list"},"group":{"path":"../components/group"},"panel":{"path":"../components/panel"},"counter":{"path":"../components/counter"},"slide-view":{"path":"../$vendor/miniprogram-slide-view/miniprogram_dist/index"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goback($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"list":{"path":"../components/wepy-list"},"group":{"path":"../components/group"},"panel":{"path":"../components/panel"},"counter":{"path":"../components/counter"},"slide-view":{"path":"../$vendor/miniprogram-slide-view/miniprogram_dist/index"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goback($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"list":{"path":"../components/wepy-list"},"group":{"path":"../components/group"},"panel":{"path":"../components/panel"},"counter":{"path":"../components/counter"},"slide-view":{"path":"../$vendor/miniprogram-slide-view/miniprogram_dist/index"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goback($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"list":{"path":"../components/wepy-list"},"group":{"path":"../components/group"},"panel":{"path":"../components/panel"},"counter":{"path":"../components/counter"},"slide-view":{"path":"../$vendor/miniprogram-slide-view/miniprogram_dist/index"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goback($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"list":{"path":"../components/wepy-list"},"group":{"path":"../components/group"},"panel":{"path":"../components/panel"},"counter":{"path":"../components/counter"},"slide-view":{"path":"../$vendor/miniprogram-slide-view/miniprogram_dist/index"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goback($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"list":{"path":"../components/wepy-list"},"group":{"path":"../components/group"},"panel":{"path":"../components/panel"},"counter":{"path":"../components/counter"},"slide-view":{"path":"../$vendor/miniprogram-slide-view/miniprogram_dist/index"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goback($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"list":{"path":"../components/wepy-list"},"group":{"path":"../components/group"},"panel":{"path":"../components/panel"},"counter":{"path":"../components/counter"},"slide-view":{"path":"../$vendor/miniprogram-slide-view/miniprogram_dist/index"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goback($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"list":{"path":"../components/wepy-list"},"group":{"path":"../components/group"},"panel":{"path":"../components/panel"},"counter":{"path":"../components/counter"},"slide-view":{"path":"../$vendor/miniprogram-slide-view/miniprogram_dist/index"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goback($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"list":{"path":"../components/wepy-list"},"group":{"path":"../components/group"},"panel":{"path":"../components/panel"},"counter":{"path":"../components/counter"},"slide-view":{"path":"../$vendor/miniprogram-slide-view/miniprogram_dist/index"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goback($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"list":{"path":"../components/wepy-list"},"group":{"path":"../components/group"},"panel":{"path":"../components/panel"},"counter":{"path":"../components/counter"},"slide-view":{"path":"../$vendor/miniprogram-slide-view/miniprogram_dist/index"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goback($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"list":{"path":"../components/wepy-list"},"group":{"path":"../components/group"},"panel":{"path":"../components/panel"},"counter":{"path":"../components/counter"},"slide-view":{"path":"../$vendor/miniprogram-slide-view/miniprogram_dist/index"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goback($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"list":{"path":"../components/wepy-list"},"group":{"path":"../components/group"},"panel":{"path":"../components/panel"},"counter":{"path":"../components/counter"},"slide-view":{"path":"../$vendor/miniprogram-slide-view/miniprogram_dist/index"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goback($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"list":{"path":"../components/wepy-list"},"group":{"path":"../components/group"},"panel":{"path":"../components/panel"},"counter":{"path":"../components/counter"},"slide-view":{"path":"../$vendor/miniprogram-slide-view/miniprogram_dist/index"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goback($event)
      })();
    
  }}}, models: {} });