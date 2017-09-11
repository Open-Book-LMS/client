<template>
  <div id='coursePage'>
    <courseNavigationCard></courseNavigationCard>
  </div>
</template>
<script>
import Axios from 'axios';
import courseNavigationCard from '../assets/cards/courseNavigationCard';

export default {
  name: 'coursePage',
  components: {
    courseNavigationCard,
  },
  data() {
    return {
      courseId: this.$route.params.courseId,
      courseNavigation: [],
      courseItems: [],
    };
  },
  mounted() {
    Axios.get(`http://localhost:3000/course/${this.courseId}/navigation`)
    .then((response) => {
      this.courseNavigation = response.data.navigation;
      // Axios.get(``)
      // .then((response) => {
      //   // eslint-disable-next-line
      //   console.log(response.data);
      // })
    });
    // eslint-disable-next-line
    console.log(this.courseNavigation);
  },
};
</script>
<style lang="scss" scoped>
</style>
