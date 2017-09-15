<template>
  <div id='gradebook'>
    <h3>
      Gradebook
    </h3>
    <!-- <gradebookNav></gradebookNav>
    <router-view></router-view> -->
    <assignmentGradebook></assignmentGradebook>
  </div>
</template>
<script>
import gradebookNav from '../components/gradebookNav';
import assignmentGradebook from '../components/assignmentGradebook';

export default {
  name: 'gradebook',
  components: {
    gradebookNav,
    assignmentGradebook,
  },
  mounted() {
    this.$store.dispatch('getGradableAssignments');
    this.$store.dispatch('getSubmissions');
  },
};
</script>
<style lang="scss" scoped>

</style>
