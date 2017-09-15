<template>
  <div id='gradingRubricInst'>
    <h2>Grading Rubric</h2>
    <div v-for="item in assignment[0].grading_rubric">
      <gradeRubricListItemInst :itemData="item"></gradeRubricListItemInst>
    </div>
  </div>
</template>
<script>
import gradeRubricListItemInst from '../listItems/gradeRubricListItemInst';

export default {
  name: 'gradingRubricInst',
  props: ['assignId'],
  components: {
    gradeRubricListItemInst,
  },
  computed: {
    assignment() {
      return this.$store.state.gradebook.filter(assignment =>
        //eslint-disable-next-line
        assignment._id === this.assignId);
    },
  },
};
</script>
<style lang="scss" scoped>
  #gradingRubricInst {
    margin-right: 20px;
  }
</style>
