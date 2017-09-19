<template>
  <div id='courseListItem'>
    <div class="course-title-wrapper">
      <router-link class="course-link" :to="{ name: 'coursePage', params: { courseId: course.id}}"><span class="course-title"><b>{{course.code}}</b> {{course.name}}</span></router-link>
      <span @click="courseOpen = true" v-if="!courseOpen"><i class="course-open-icon fa fa-2x fa-caret-left" aria-hidden="true"></i></span>
      <span @click="courseOpen = false" v-if="courseOpen"><i class="course-open-icon fa fa-2x fa-caret-down" aria-hidden="true"></i></span>
    </div>
    <div v-if="courseOpen" class="course-details">
      <span class="course-dates">{{course.start_date | moment('MMM Do YYYY')}} - {{course.end_date | moment('MMM Do YYYY')}}</span>
      <ul class="notification-list" v-if="isStudent">
        <li class="notification-item">
          Assignment graded: Drawing Assignment 1
        </li>
      </ul>
      <ul class="notification-list" v-if="!isStudent">
        <li class="notification-item">
          New submission for Drawing Assignment 2
        </li>
        <li class="notification-item">
          Email from Mildred Wells: For the sketch book check-in this week, will we need to have a certain number of sketches?
        </li>
        <li class="notification-item">
          New submission for Color Discussion
        </li>
        <li class="notification-item">
          New submission for Drawing Assignment 2
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'courseListItem',
  props: ['course'],
  data() {
    return {
      courseOpen: false,
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
  $white: #e9e9e9;
  $old-pink: #c4688d;

  .course-title-wrapper {
    display: flex;
    justify-content: space-between;
    margin: 15px;
  }
  .course-link {
    text-decoration: none;
  }
  .course-link :hover {
    color: $old-pink;
  }
  .course-title {
  	font-family: Didot;
  	font-size: 24px;
  	text-align: left;
  	color: $charcoal-grey;
  }
  .course-open-icon {
    color: $charcoal-grey;
    text-align: right;
  }
  .course-details {

  }
  .course-dates {
  	font-family: ArticulatCFv2;
  	font-size: 18px;
  	font-weight: 300;
  	text-align: left;
  	color: $charcoal-grey;
  }
  .notification-list {
    list-style: disc;
  }
  .notification-item {
  	font-family: AvenirNext;
  	text-align: left;
  	color: $charcoal-grey;
  }
</style>
