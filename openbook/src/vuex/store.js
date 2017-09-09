import vue from 'vue';
import vuex from 'vuex';

vue.use(vuex);

const state = {
  user: {},
  courses: [],
};

const mutations = {
  TOGGLE(item) {
    state[item] = !state[item];
  },
};

export default new vuex.Store({
  state,
  mutations,
});
