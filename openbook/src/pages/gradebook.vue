<template>
  <div id='gradebook'>
    <h3>
      Gradebook
    </h3>
    <!-- <gradebookNav></gradebookNav>
    <router-view></router-view> -->
    <assignmentGradebook v-if="!isStudent"></assignmentGradebook>
    <studentGradebook v-if="isStudent"></studentGradebook>
  </div>
</template>
<script>
import gradebookNav from '../components/gradebookNav';
import assignmentGradebook from '../components/assignmentGradebook';
import studentGradebook from '../components/studentGradebook';

export default {
  name: 'gradebook',
  components: {
    gradebookNav,
    assignmentGradebook,
    studentGradebook,
  },
  computed: {
    //eslint-disable-next-line
    isStudent: function() {
      return this.$store.state.currentUser.type === 'student';
    },
  },
};
</script>
<style lang="scss" scoped>

</style>
