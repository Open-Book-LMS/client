/* eslint-disable */

import vue from 'vue';
import vuex from 'vuex';
import Axios from 'axios';

vue.use(vuex);

const state = {
  user: {},
  courseNav: [],
  currentItem: {},
};

const mutations = {
  TOGGLE(state, item) {
    state[item] = !state[item];
  },
  courseNav (state, data) {
    state.courseNav = data;
  },
  currentItem (state, data) {
    state.currentItem = data;
  }
};

const actions = {
  getCourseItems({ commit }, courseId) {
    Axios.get('http://localhost:3000/course/' + courseId.courseId + '/navigation')
     .then((response) => {
       commit('courseNav', response.data);
     })
     .catch((err) => {
       console.log(err);
     });
  },
  getCurrentCourseItem({ commit }, itemId) {
    console.log(itemId)
    Axios.get(`http://localhost:3000/course/assignment/${itemId}`)
    .then((response) => {
      console.log(response);
      commit('currentItem', response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  },
};


export default new vuex.Store({
  state,
  mutations,
  actions,
});
