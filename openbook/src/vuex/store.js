/* eslint-disable */

import vue from 'vue';
import vuex from 'vuex';
import Axios from 'axios';

vue.use(vuex);

const state = {
  user: {},
  courses: [],
};

const mutations = {
  TOGGLE(state, item) {
    state[item] = !state[item];
  },
  courses (state, data) {
    state.courses = data;
  }
};

const actions = {
  getCourseItems({ commit }) {
    Axios.get('http://localhost:3000/course/1/navigation')
     .then((response) => {
       commit('courses', response.data);
     })
     .catch((err) => {
       console.log(err);
     });
  }
}

export default new vuex.Store({
  state,
  mutations,
  actions,
});
