"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserInfo = getUserInfo;
exports.login = login;
exports.bindTop = bindTop;
exports.getAllData = getAllData;
exports.getMainDatas = getMainDatas;
exports.getGoodsInfo = getGoodsInfo;
exports.getAddress = getAddress;
exports.getDefaultAddress = getDefaultAddress;
exports.delAddress = delAddress;
exports.editAddress = editAddress;
exports.setDefault = setDefault;
exports.getSys = getSys;
exports.getTransport = getTransport;
exports.pushOrder = pushOrder;
exports.getOrderList = getOrderList;
exports.getOrderDetail = getOrderDetail;
exports.setStatus = setStatus;
exports.setOver = setOver;
exports.payOrder = payOrder;
exports.getExpress = getExpress;
exports.getIntegral = getIntegral;
exports.getRank = getRank;

var _request = _interopRequireDefault(require('../utils/request.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 用户信息
function getUserInfo(data) {
  return (0, _request["default"])({
    url: 'User/user/index',
    method: 'GET',
    data: data
  }, true);
} // 登录


function login(data) {
  return (0, _request["default"])({
    url: 'User/Index/wxlogin',
    method: 'post',
    data: data
  });
} // 绑定上级


function bindTop(data) {
  return (0, _request["default"])({
    url: 'user/user/bindpid',
    method: 'post',
    data: data
  });
} // 首页接口


function getAllData(data, login) {
  return (0, _request["default"])({
    url: login ? 'User/place/newIndex' : 'Home/newIndex/index',
    method: 'get',
    data: data
  });
} // 首页商品列表


function getMainDatas(data) {
  return (0, _request["default"])({
    url: 'index/index',
    method: 'post',
    data: data
  });
} // 获取商品详情


function getGoodsInfo(data) {
  return (0, _request["default"])({
    url: 'goods/getGoodsInfo',
    method: 'post',
    data: data
  });
} // 获取地址列表


function getAddress(data) {
  return (0, _request["default"])({
    url: 'user/getAddress',
    method: 'post',
    data: data
  });
} // 获取默认地址


function getDefaultAddress(data) {
  return (0, _request["default"])({
    url: 'user/getDefaultAddress',
    method: 'post',
    data: data
  });
} // 删除地址


function delAddress(data) {
  return (0, _request["default"])({
    url: 'user/delAddress',
    method: 'post',
    data: data
  });
} // 编辑地址


function editAddress(data) {
  return (0, _request["default"])({
    url: 'user/editAddress',
    method: 'post',
    data: data
  });
} // 设置默认


function setDefault(data) {
  return (0, _request["default"])({
    url: 'user/setDefault',
    method: 'post',
    data: data
  });
} // 系统说明


function getSys(data) {
  return (0, _request["default"])({
    url: 'user/getSys',
    method: 'post',
    data: data
  });
} // 获取运费


function getTransport(data) {
  return (0, _request["default"])({
    url: 'order/getTransport',
    method: 'post',
    data: data
  });
} // 提交订单


function pushOrder(data) {
  return (0, _request["default"])({
    url: 'order/pushOrder',
    method: 'post',
    data: data
  });
} // 获取订单列表


function getOrderList(data) {
  return (0, _request["default"])({
    url: 'order/getOrderList',
    method: 'post',
    data: data
  });
} // 获取订单详情


function getOrderDetail(data) {
  return (0, _request["default"])({
    url: 'order/getOrderDetail',
    method: 'post',
    data: data
  });
} // 取消订单


function setStatus(data) {
  return (0, _request["default"])({
    url: 'order/setStatus',
    method: 'post',
    data: data
  });
} // 确认收货


function setOver(data) {
  return (0, _request["default"])({
    url: 'order/setOver',
    method: 'post',
    data: data
  });
} // 支付订单


function payOrder(data) {
  return (0, _request["default"])({
    url: 'order/payOrder',
    method: 'post',
    data: data
  });
} // 物流信息


function getExpress(data) {
  return (0, _request["default"])({
    url: 'order/getExpress',
    method: 'post',
    data: data
  });
} // 升级记录


function getIntegral(data) {
  return (0, _request["default"])({
    url: 'user/getIntegral',
    method: 'post',
    data: data
  });
} // 排行榜


function getRank(data) {
  return (0, _request["default"])({
    url: 'user/getRank',
    method: 'post',
    data: data
  });
}