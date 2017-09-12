<template>
  <div id='gradebookAssignmentListItem'>
    <div class="gradebook-assignment-wrapper">
      <span class="assignment-title">{{assignmentData.name}} <i class="fa fa-pencil-square-o" aria-hidden="true"></i></span>
      <span @click="assignmentOpen = true" v-if="!assignmentOpen"><i class="course-open-icon fa fa-2x fa-caret-left" aria-hidden="true"></i></span>
      <span @click="assignmentOpen = false" v-if="assignmentOpen"><i class="course-open-icon fa fa-2x fa-caret-down" aria-hidden="true"></i></span>
    </div>
    <div class="assignment-details-wrapper">
      <div v-for="student in $store.state.students">
        <gradeAssignStuListItem :studentData="student"></gradeAssignStuListItem>
      </div>
    </div>
  </div>
</template>
<script>
import gradeAssignStuListItem from './gradeAssignStuListItem';

export default {
  name: 'gradebookAssignmentListItem',
  props: ['assignmentData'],
  components: {
    gradeAssignStuListItem,
  },
  data() {
    return {
      assignmentOpen: false,
    };
  },
};
</script>
<style lang="scss" scoped>
  $charcoal-grey: #4a4a4a;

  .gradebook-assignment-wrapper {
    border-bottom: .5px solid black;
    padding: 10px;
    text-align: left;
    display: flex;
    justify-content: space-between;
  }
  .assignment-title {
    margin-left: 10px;
    font-family: Didot;
    font-size: 24px;
    text-align: left;
    color: $charcoal-grey;
  }
  .course-open-icon {
    color: $charcoal-grey;
    text-align: right;
  }
</style>
