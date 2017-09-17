<template>
  <div id='studentGradebook'>
    <div class="gradebook-list-wrapper">
      <div v-for="assignment in $store.state.gradebook">
        <gradebookAssignmentListItem :assignmentData="assignment"></gradebookAssignmentListItem>
      </div>
    </div>
  </div>
</template>
<script>
import gradebookAssignmentListItem from '../assets/listItems/gradebookAssignmentListItem';

export default {
  name: 'studentGradebook',
  components: {
    gradebookAssignmentListItem,
  },
};
</script>
<style lang="scss" scoped>
</style>
