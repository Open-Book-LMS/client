<template>
  <div id='courseNavigationListItem'>
    <div class="item-title-wrapper">
      <router-link class="link-style" :to="{ name: 'courseTool', params: { assignId: itemData._id}}"><span class="item-title">{{itemData.name}}</span></router-link><br />
      <span class="item-due-date" v-if="itemData.end_date">{{itemData.end_date | moment('MMM Do YYYY')}}</span>
      <div class="edit-item" v-if="!isStudent">
        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
      </div>
      <div v-if="isStudent && gradable">
        <span class='red-text' :class="{'green-text' : submitted }"><i class="fa fa-check-square-o" aria-hidden="true"></i></span>
        <span class='red-text' :class="{'green-text' : graded }"><i class="fa fa-star" aria-hidden="true"></i></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'courseNavigationListItem',
  props: ['itemData'],
  data() {
    return {
      isStudent: this.$store.state.currentUser.type === 'student',
      gradable: this.itemData.gradebook,
    };
  },
  computed: {
    //eslint-disable-next-line
    submitted: function() {
      if (this.$store.state.currentUser.submittions) {
        //eslint-disable-next-line
        return this.$store.state.currentUser.submissions.filter((submisson) => {
          //eslint-disable-next-line
          return submisson.assignment_id === this.itemData._id;
        });
      }
    },
    //eslint-disable-next-line
    graded: function() {
      if (this.submitted) {
        return this.submitted[0].graded;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
  $charcoal-grey: #4a4a4a;
  $old-pink: #c4688d;
  $scarlet: #d0011b;
  $apple-green: #7ed321;

  #courseNavigationListItem {
    display: subgrid;
  }
  .link-style {
    text-decoration: none;
  }
  .item-title-wrapper {
    margin: 20px;
    padding: 10px;
    border-bottom: 1px solid $charcoal-grey;
    text-align: left;
  }
  .edit-item{
    text-align: right;
  }
  .item-title {
    font-family: AvenirNext;
    font-size: 18px;
    font-weight: 600;
    text-align: left;
    color: $charcoal-grey;
  }
  .item-title:hover {
    color: $old-pink;
  }
  .red-text {
    color:$scarlet;
  }
  .green-text {
    color:$apple-green;
  }
</style>
