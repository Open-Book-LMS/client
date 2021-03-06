/* eslint-disable */

import vue from 'vue';
import vuex from 'vuex';
import Axios from 'axios';

vue.use(vuex);

const state = {
  currentUser: {},
  courseList: [],
  currentCourse: 0,
  courseNav: [],
  currentItem: {},
  gradebook: [],
  students: [],
  submissions: [],
  studentSubmissions: {}
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
  },
  gradebook (state, data){
    state.gradebook = data;
  },
  students (state, data){
    state.students = data;
  },
  submissions (state, data) {
    state.submissions = data;
  },
  studentSubmissions (state, data) {
    state.studentSubmissions = data;
  },
  currentUser (state, data) {
    state.currentUser = data;
  },
  courseList (state, data) {
    state.courseList = data;
  },
  chatItem (state, data) {
    state.currentItem.data.chat.push(data);
  },
  clearState (state) {
    state = {
      currentUser: {},
      courseList: [],
      currentCourse: 0,
      courseNav: [],
      currentItem: {},
      gradebook: [],
      students: [],
      submissions: [],
      studentSubmissions: {}
    };
  }
};

const actions = {
  getCourseItems({ commit }, courseId) {
    Axios.get('https://open-book-lms.herokuapp.com/course/' + courseId.courseId + '/navigation')
     .then((response) => {
       commit('currentCourse', courseId.courseId);
       commit('courseNav', response.data);
     })
     .catch((err) => {
       console.log(err);
     });
  },
  getCurrentCourseItem({ commit }, itemId) {
    Axios.get(`https://open-book-lms.herokuapp.com/assignment/${itemId}`)
    .then((response) => {
      commit('currentItem', response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  },
  getGradableAssignments({ commit }) {
    Axios.get(`https://open-book-lms.herokuapp.com/course/${state.currentCourse}/gradebook`)
    .then((response) => {
      commit('gradebook', response.data);
    })
    .catch((err) => {
      console.log(err);
    })
  },
  getStudents({ commit }, courseId) {
    Axios.get(`https://open-book-lms.herokuapp.com/course/${courseId.courseId}/students`)
    .then((response) => {
      commit('students', response.data)
    })
    .catch((err) => {
      console.log(err);
    })
  },
  getSubmissions({ commit }) {
    Axios.get(`https://open-book-lms.herokuapp.com/course/${state.currentCourse}/submissions`)
    .then((response) => {
      commit('submissions', response.data);
      this.dispatch('createStudentSubmissions');
    })
    .catch((err) => {
      console.log(err);
    })
  },
  createStudentSubmissions({ commit }) {
      const submissionObj = {};
      state.students.forEach((student) => {
        submissionObj[student.id] = state.submissions.filter((submission) => {
          return submission.student_id == student.id;
        })
      })
      commit('studentSubmissions', submissionObj);
    },
  getUserDatabyID({ commit }, userId) {
    Axios.get(`https://open-book-lms.herokuapp.com/auth/user/${userId}`)
    .then((response) => {
      commit('currentUser', response.data);
      this.dispatch('getCourseList');
    })
  },
  getCourseList({ commit }) {
    Axios.get(`https://open-book-lms.herokuapp.com/dashboard/${state.currentUser.id}/courses`)
     .then((response) => {
       commit('courseList', response.data);
     })
  },
  addChatItem({ commit }, chat){
    commit('chatItem', chat);
  },
  clearState({ commit }) {
    commit('clearState');
  }
  };

export default new vuex.Store({
  state,
  mutations,
  actions,
});
