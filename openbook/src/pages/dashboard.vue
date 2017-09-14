<template>
  <div id='Dashboard'>
    <courseListCard :courseList="courseListData"></courseListCard>
  </div>
</template>
<script>
import Axios from 'axios';
import courseListCard from '../assets/cards/courseListCard';

export default {
  name: 'Dashboard',
  components: {
    courseListCard,
  },
  data() {
    return {
      courseListData: {},
    };
  },
  mounted() {
    // this.$store.dispatch('getCourseList');
    Axios.get('http://localhost:3000/dashboard/1/courses')
     .then((response) => {
       this.courseListData = response.data;
     })
     .catch((err) => {
       // eslint-disable-next-line
       console.log(err);
     });
  },
};
</script>
<style lang="scss" scoped>
  #Dashboard {
    display: grid;
    grid-template-columns: 5% 60% 20px auto 5%;
    margin-top: 20px;
  }
</style>
