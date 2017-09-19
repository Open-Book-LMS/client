<template>
  <div id='Dashboard'>
    <announcementsCard></announcementsCard>
    <courseListCard></courseListCard>
    <upcomingDatesCard v-if="isStudent"></upcomingDatesCard>
  </div>
</template>
<script>
import courseListCard from '../assets/cards/courseListCard';
import announcementsCard from '../assets/cards/announcementsCard';
import upcomingDatesCard from '../assets/cards/upcomingDatesCard';

export default {
  name: 'Dashboard',
  components: {
    courseListCard,
    announcementsCard,
    upcomingDatesCard,
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
  #Dashboard {
    display: grid;
    grid-template-columns: 5% 60% 20px auto 5%;
    grid-template-rows: 2% 40% auto;
    margin-top: 20px;
  }
</style>
