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
    };
  },
  mounted() {
    Axios.get(`http://localhost:3000/course/${this.courseId}/navigation`)
    .then((response) => {
      this.courseNavigation = response.data.navigation;
    });
    // eslint-disable-next-line
    console.log(this.courseNavigation);
  },
};
</script>
<style lang="scss" scoped>
</style>
