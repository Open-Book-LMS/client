<template>
  <div id='coursePage' class="course-page">
    <courseNavigationCard></courseNavigationCard>
    <courseContent></courseContent>
  </div>
</template>
<script>
// import Axios from 'axios';
import courseNavigationCard from '../assets/cards/courseNavigationCard';
import courseContent from '../components/courseContent';

export default {
  name: 'coursePage',
  components: {
    courseNavigationCard,
    courseContent,
  },
  data() {
    return {
      courseId: this.$route.params.courseId,
    };
  },
  mounted() {
    // Axios.get(`http://localhost:3000/course/${this.courseId}/navigation`)
    // .then((response) => {
    //   this.courseNavigation = response.data;
    // });
    this.$store.dispatch('getCourseItems');
  },
};
</script>
<style lang="scss" scoped>
  .course-page {
    display: grid;
    grid-template-columns: 5% 25% 20px auto 5%;
    margin-top: 20px;
  }
</style>
