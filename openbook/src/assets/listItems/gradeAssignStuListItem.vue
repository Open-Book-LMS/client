<template>
  <div id='gradeAssignStuListItem'>
    <p :class="{'has-not-submitted' : hasNotSubmitted}" class="left-margin">
      <!-- <i class="fa fa-user pull-right" aria-hidden="true"></i> -->
      {{studentData.first_name}} {{studentData.last_name}}
      <span class="pull-right left-margin" v-if="hasGrade">{{relevantSubmission}}</span>
      <span class="pull-right left-margin"  v-if="!hasGrade">N/A</span>
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
    this.findRelevantSubmission();
  },
  methods: {
    checkAssignId(submission) {
      return submission.assignment_id === this.assignId;
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
    //eslint-disable-next-line
    findHasGrade: function() {
      return this.submissions.grade;
    },
  },
};
</script>
<style lang="scss" scoped>
  #gradeAssignStuListItem {
    display: flex;
  }
  .has-not-submitted {
    color: red;
  }
  .left-margin {
    margin-left: 20px;
  }
  .pull-right {
    text-align: right;
  }
</style>
