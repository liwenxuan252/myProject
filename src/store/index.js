import Vue from 'vue';
import Vuex from 'vuex';
import { setCookie, getUserCookie, removeUserCookie } from '@/utils/userCookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapsed: false, // 用于切换菜单的闭合状态 false代表不闭合 true代表闭合
    user: { // 登录的信息
      username: getUserCookie().username, // 用户名
      email: getUserCookie().email, // 邮箱账号
      appkey: getUserCookie().appkey, // 登录凭证类似token
      role: getUserCookie().role, // 登录人员类型
    },
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    setUserInfo(state, userInfo) {
      state.user = userInfo;
    },
    logout(state) {
      state.user = {
        username: '',
        email: '',
        appkey: '',
        role: '',
      };
    },
  },
  actions: {
    changeCollapsed({ commit }) { // 切换菜单闭合
      commit('changeCollapsed');
    },
    setUserInfo({ commit }, userInfo) {
      commit('setUserInfo', userInfo);
      setCookie(userInfo);
    },
    logout({ commit }) {
      commit('logout');
      removeUserCookie();
    },
  },
  modules: {
  },
});
