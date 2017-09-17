<template>
  <div id='gradebookAssignmentListItem'>
    <div class="gradebook-assignment-wrapper">
      <span class="assignment-title">{{assignmentData.name}} <i v-if="!isStudent" class="fa fa-pencil-square-o" aria-hidden="true"></i></span>
      <span @click="assignmentOpen = true" v-if="!assignmentOpen"><i class="course-open-icon fa fa-2x fa-caret-left" aria-hidden="true"></i></span>
      <span @click="assignmentOpen = false" v-if="assignmentOpen"><i class="course-open-icon fa fa-2x fa-caret-down" aria-hidden="true"></i></span>
    </div>
    <div class="assignmentCard" v-if="assignmentOpen">
      <div v-if="!isStudent" class="assignment-details-wrapper">
        <h2>Student Grades</h2>
        <div v-for="student in $store.state.students">
          <gradeAssignStuListItem :studentData="student" :assignId="assignmentData._id"></gradeAssignStuListItem>
        </div>
      </div>
      <div class="rubric-wrapper">
        <gradingRubricInst v-if="!isStudent" :assignId="assignmentData._id"></gradingRubricInst>
        
      </div>
    </div>
  </div>
</template>
<script>
import gradeAssignStuListItem from './gradeAssignStuListItem';
import gradingRubricInst from '../cards/gradingRubricInst';

export default {
  name: 'gradebookAssignmentListItemInst',
  props: ['assignmentData'],
  components: {
    gradeAssignStuListItem,
    gradingRubricInst,
  },
  data() {
    return {
      assignmentOpen: false,
    };
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
  $charcoal-grey: #4a4a4a;

  .assignmentCard {
    display: grid;
    grid-template-columns: auto 20px 30%;
  }
  .rubric-wrapper {
    grid-column: 3 / span 1;
  }
  .gradebook-assignment-wrapper {
    border-bottom: .5px solid black;
    padding: 10px;
    text-align: left;
    display: flex;
    justify-content: space-between;
    grid-column: 1 / span 1;
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
  .assignment-details-wrapper {
    text-align: left;
    margin-left: 20px;
  }
</style>
