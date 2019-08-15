import $request from '../utils/request'

// 用户信息
export function getUserInfo(data) {
  return $request({
    url: 'User/user/index',
    method: 'GET',
    data
  }, true)
}

// 登录
export function login(data) {
  return $request({
    url: 'User/Index/wxlogin',
    method: 'post',
    data
  })
}

// 登陆
export function bindTop(data) {
  return $request({
    url: 'user/user/bindpid',
    method: 'post',
    data
  })
}
// 重新登陆
export function reLogin(data) {
  return $request({
    url: 'Login/reLogin',
    method: 'post',
    data
  })
}

// 首页商品列表
export function getMainDatas(data) {
  return $request({
    url: 'index/index',
    method: 'post',
    data
  })
}

// 获取商品详情
export function getGoodsInfo(data) {
  return $request({
    url: 'goods/getGoodsInfo',
    method: 'post',
    data
  })
}

// 获取地址列表
export function getAddress(data) {
  return $request({
    url: 'user/getAddress',
    method: 'post',
    data
  })
}

// 获取默认地址
export function getDefaultAddress(data) {
  return $request({
    url: 'user/getDefaultAddress',
    method: 'post',
    data
  })
}

// 删除地址
export function delAddress(data) {
  return $request({
    url: 'user/delAddress',
    method: 'post',
    data
  })
}

// 编辑地址
export function editAddress(data) {
  return $request({
    url: 'user/editAddress',
    method: 'post',
    data
  })
}

// 设置默认
export function setDefault(data) {
  return $request({
    url: 'user/setDefault',
    method: 'post',
    data
  })
}

// 系统说明
export function getSys(data) {
  return $request({
    url: 'user/getSys',
    method: 'post',
    data
  })
}

// 获取运费
export function getTransport(data) {
  return $request({
    url: 'order/getTransport',
    method: 'post',
    data
  })
}

// 提交订单
export function pushOrder(data) {
  return $request({
    url: 'order/pushOrder',
    method: 'post',
    data
  })
}

// 获取订单列表
export function getOrderList(data) {
  return $request({
    url: 'order/getOrderList',
    method: 'post',
    data
  })
}

// 获取订单详情
export function getOrderDetail(data) {
  return $request({
    url: 'order/getOrderDetail',
    method: 'post',
    data
  })
}

// 取消订单
export function setStatus(data) {
  return $request({
    url: 'order/setStatus',
    method: 'post',
    data
  })
}

// 确认收货
export function setOver(data) {
  return $request({
    url: 'order/setOver',
    method: 'post',
    data
  })
}

// 支付订单
export function payOrder(data) {
  return $request({
    url: 'order/payOrder',
    method: 'post',
    data
  })
}

// 物流信息
export function getExpress(data) {
  return $request({
    url: 'order/getExpress',
    method: 'post',
    data
  })
}

// 升级记录
export function getIntegral(data) {
  return $request({
    url: 'user/getIntegral',
    method: 'post',
    data
  })
}

// 排行榜
export function getRank(data) {
  return $request({
    url: 'user/getRank',
    method: 'post',
    data
  })
}
