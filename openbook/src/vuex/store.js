/* eslint-disable */

import vue from 'vue';
import vuex from 'vuex';
import Axios from 'axios';

vue.use(vuex);

const state = {
  currentUser: {},
  currentCourse: 0,
  courseNav: [],
  currentItem: {},
};

const mutations = {
  TOGGLE(state, item) {
    state[item] = !state[item];
  },
  currentCourse(state, id) {
    state.currentCourse = id;
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
       commit('currentCourse', courseId.courseId);
       commit('courseNav', response.data);
     })
     .catch((err) => {
       console.log(err);
     });
  },
  getCurrentCourseItem({ commit }, itemId) {
    Axios.get(`http://localhost:3000/course/${state.currentCourse}/assignment/${itemId}`)
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
