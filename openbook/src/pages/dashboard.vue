<template>
  <div id='Dashboard'>
    <!-- <announcementsCard></announcementsCard> -->
    <courseListCard></courseListCard>
  </div>
</template>
<script>
import courseListCard from '../assets/cards/courseListCard';
import announcementsCard from '../assets/cards/announcementsCard';

export default {
  name: 'Dashboard',
  components: {
    courseListCard,
    announcementsCard,
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
