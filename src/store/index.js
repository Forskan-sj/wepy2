import Vuex from '@wepy/x';
import wepy from '@wepy/core';
wepy.use(Vuex)
export default new Vuex.Store({
  state: {
    counter: 0,
    formIds: '',
    sid: '',
    share_uid_from: '', // 从分享链接进来的uid
    userInfo: {}, // 用户信息
    deviceInfo: {}, // 设备信息
  },
  mutations: {
    increment (state) {
      state.counter++;
    },
    decrement (state) {
      state.counter--;
    },
    setFormIds (state, val) {
      state.formIds = val
    },
    setSID (state, val) {
      state.sid = val
    },
    setUserInfo (state, val) {
      state.userInfo = val
    },
    setDeviceInfo (state, val) {
      state.deviceInfo = val
    },
    set_share_uid_from (state, val) {
      state.share_uid_from = val
    }
  },
  actions: {
    increment ({ commit }) {
      commit('increment');
    },
    decrement ({ commit }) {
      commit('decrement');
    },
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    }
  }
});
