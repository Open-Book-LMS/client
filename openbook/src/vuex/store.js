/* eslint-disable */

import vue from 'vue';
import vuex from 'vuex';

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

// actions: {
//   getCourses({ commit }) {
//     Axios.get('http://localhost:3000/dashboard/1/courses')
//      .then((response) => {
//        console.log(response.data);
//        commit('courses', response.data);
//      })
//      .catch((err) => {
//        console.log(err);
//      });
//   }
// }

export default new vuex.Store({
  state,
  mutations,
  // actions,
});
