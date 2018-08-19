/* eslint no-shadow: ["error", { "allow": ["state"] }] */

const state = {
  showMobileMenu: false,
  showCategories: false,
};

const getters = {};

const mutations = {
  toggleMobileMenu(state) {
    state.showMobileMenu = !state.showMobileMenu;
    state.showCategories = false;
  },
  toggleCategories(state) {
    state.showCategories = !state.showCategories;
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
