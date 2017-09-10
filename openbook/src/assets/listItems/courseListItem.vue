<template>
  <div id='courseListItem'>
    <div>
      <router-link class="course-link" :to="{ name: 'coursePage', params: { courseId: course.id}}"><span class="course-title"><b>{{course.code}}</b> {{course.name}}</span></router-link>
      <span @click="courseOpen = true" v-if="!courseOpen"><i class="course-open-icon fa fa-caret-left" aria-hidden="true"></i></span>
      <span @click="courseOpen = false" v-if="courseOpen"><i class="course-open-icon fa fa-caret-down" aria-hidden="true"></i></span>
    </div>
    <div v-if="courseOpen" class="course-details">
      <span class="course-dates">{{course.start_date}} - {{course.end_date}}</span>
      <ul class="notification-list">
        <li class="notification-item">
          Notification
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
};
</script>
<style lang="scss" scoped>
  $charcoal-grey: #4a4a4a;
  $white: #e9e9e9;

  .course-link {
    text-decoration: none;
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
  	font-size: 10px;
  	text-align: left;
  	color: $charcoal-grey;
  }
</style>
