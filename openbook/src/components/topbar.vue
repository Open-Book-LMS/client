<template>
  <div id='topbar'>
    <div class="topbar-content-wrapper">
      <profileCard></profileCard>
      <landButton class="button-flex" v-if="landButton"></landButton>
      <dashButton class="button-flex" v-if="!dashButton"></dashButton>
      <gradebookButton class="button-flex" v-if="gradebookButton"></gradebookButton>
      <toCourseButton class="button-flex" v-if="courseButton"></toCourseButton>
    </div>
    <div class="line"></div>
  </div>
</template>
<script>
import profileCard from '../assets/cards/profileCard';
import gradebookButton from '../assets/buttons/gradebookButton';
import toCourseButton from '../assets/buttons/toCourseButton';
import dashButton from '../assets/buttons/dashButton';
import landButton from '../assets/buttons/landButton';

export default {
  name: 'topbar',
  components: {
    profileCard,
    gradebookButton,
    toCourseButton,
    dashButton,
    landButton,
  },
  computed: {
    //eslint-disable-next-line
    gradebookButton: function() {
      const course = this.route === 'coursePage';
      const courseTool = this.route === 'courseTool';
      return course || courseTool;
    },
    //eslint-disable-next-line
    courseButton: function() {
      const gradebookPage = this.route === 'gradebook';
      const assignmentView = this.route === 'assignmentGradebook';
      return gradebookPage || assignmentView;
    },
    //eslint-disable-next-line
    dashButton: function() {
      const dashboard = this.route === 'Dashboard';
      const landingPage = this.route === 'landingPage';
      return dashboard || landingPage;
    },
    //eslint-disable-next-line
    landButton: function() {
      const dashboard = this.route === 'Dashboard';
      return dashboard;
    },
    //eslint-disable-next-line
    route: function () {
      return this.$route.name;
    },
  },
};
</script>
<style lang="scss" scoped>
  $black-50: rgba(0, 0, 0, 0.5);

  .topbar-content-wrapper {
    display: grid;
    grid-template-columns: 5% 25% 20px auto 15% 5px 15% 5%;
  }
  .button-flex {
    align-self: end;
  }
  .line {
  	width: 90%;
    margin: auto;
  	height: 10px;
  	box-shadow: 0 2px 4px 0 $black-50;
  	background-color: #979797;
    margin-top: 25px;
  }
</style>
