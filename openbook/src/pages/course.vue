<template>
  <div id='coursePage'>

  </div>
</template>
<script>
import Axios from 'axios';

export default {
  name: 'coursePage',
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
      Axios.get(``)
      .then((response) => {
        // eslint-disable-next-line
        console.log(response.data);
      })
    });
    // eslint-disable-next-line
    console.log(this.courseNavigation);
  },
};
</script>
<style lang="scss" scoped>
</style>
