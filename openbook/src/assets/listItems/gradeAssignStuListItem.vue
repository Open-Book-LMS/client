<template>
  <div id='gradeAssignStuListItem'>
    <p :class="{'has-not-submitted' : hasNotSubmitted}">
      <i class="fa fa-user" aria-hidden="true"></i> {{studentData.first_name}} {{studentData.last_name}} <span v-if="hasGrade">{{relevantSubmission}}</span><span v-if="!hasGrade">N/A</span>
    </p>
  </div>
</template>
<script>
export default {
  name: 'gradeAssignStuListItem',
  props: ['studentData', 'assignId'],
  data() {
    return {
      submissions: this.$store.state.studentSubmissions[this.studentData.id],
      hasGrade: false,
      relevantSubmission: {},
    };
  },
  mounted() {
    this.findHasGrade();
    this.findRelevantSubmission();
  },
  methods: {
    checkAssignId(submission) {
      return submission.assignment_id === this.assignId;
    },
    findHasGrade() {
      this.hasGrade = this.submissions.grade;
    },
    findRelevantSubmission() {
      this.relevantSubmission = this.submissions
      .filter(submission => this.checkAssignId(submission));
    },
  },
  computed: {
    hasNotSubmitted() {
      return !this.submissions.find(submission =>
        this.checkAssignId(submission),
      );
    },
  },
};
</script>
<style lang="scss" scoped>
  #gradeAssignStuListItem {
    text-align: left;
    display: flex;
    justify-content: space-between;
  }
  .has-not-submitted {
    color: red;
  }
</style>
