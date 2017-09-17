<template>
  <div id='assignmentGradebook'>
    <!-- <h2>Assignment</h2> -->
    <div class="gradebook-list-wrapper">
      <div v-for="assignment in $store.state.gradebook">
        <gradebookAssignmentListItem :assignmentData="assignment"></gradebookAssignmentListItem>
      </div>
    </div>
  </div>
</template>
<script>
import gradebookNav from './gradebookNav';
import gradebookAssignmentListItem from '../assets/listItems/gradebookAssignmentListItem';

export default {
  name: 'assignmentGradebook',
  components: {
    gradebookNav,
    gradebookAssignmentListItem,
  },
  mounted() {
    this.$store.dispatch('getGradableAssignments');
    this.$store.dispatch('getSubmissions');
  },
};
</script>
<style lang="scss" scoped>
  $black-50: rgba(0, 0, 0, 0.5);

  .gradebook-list-wrapper {
    width: 90%;
    margin: auto;
    background-color: #ffffff;
    box-shadow: inset 0 1px 3px 0 $black-50;
  }
</style>
