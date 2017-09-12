<template>
  <div id='gradeAssignStuListItem'>
    <p :class="{'has-not-submitted' : hasNotSubmitted}">
      {{studentData.first_name}} {{studentData.last_name}}
    </p>
  </div>
</template>
<script>
export default {
  name: 'gradeAssignStuListItem',
  props: ['studentData'],
  computed: {
    hasNotSubmitted() {
      return !this.$store.state.studentSubmissions[this.studentData.id];
    },
  },
};
</script>
<style lang="scss" scoped>
  .has-not-submitted {
    color: red;
  }
</style>
