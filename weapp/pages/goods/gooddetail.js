"use strict";

var _core = _interopRequireDefault(require('../../vendor.js')(0));

var _api = require('../../api/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var WxParse = require('../../utils/wxParse/wxParse.js');

_core["default"].page({
  data: {
    good_id: 0,
    place_id: 0,
    goodInfo: {},
    article: {}
  },
  methods: {
    getgoodinfo: function getgoodinfo(id, place_id) {
      var _this = this;

      (0, _api.getGoodInfo)({
        id: id,
        place_id: place_id
      }).then(function (res) {
        _this.goodInfo = res.datas;
        _this.goodInfo.goods_info = _this.goodInfo.goods_info.replace(/\<img/gi, '<img style="max-width:100%;height:auto; display: block" ');
        var a = WxParse.wxParse('article', 'html', _this.goodInfo.goods_info, _this, 5);
        _this.article = a.nodes;
      });
    }
  },
  onLoad: function onLoad(e) {
    this.good_id = e.id;
    this.place_id = e.place_id || 0;
  },
  onShow: function onShow() {
    this.getgoodinfo(this.good_id, this.place_id);
  }
}, {info: {"components":{"wxParse":{"path":"../../components/wxParse/wxParse"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"wxParse":{"path":"../../components/wxParse/wxParse"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"wxParse":{"path":"../../components/wxParse/wxParse"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"wxParse":{"path":"../../components/wxParse/wxParse"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"wxParse":{"path":"../../components/wxParse/wxParse"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"wxParse":{"path":"../../components/wxParse/wxParse"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"wxParse":{"path":"../../components/wxParse/wxParse"}},"on":{}}, handlers: {}, models: {} }, {info: {"components":{"wxParse":{"path":"../../components/wxParse/wxParse"}},"on":{}}, handlers: {}, models: {} });