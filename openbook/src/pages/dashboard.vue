<template>
  <div id='Dashboard'>
    <courseListCard></courseListCard>
  </div>
</template>
<script>
import courseListCard from '../assets/cards/courseListCard';

export default {
  name: 'Dashboard',
  components: {
    courseListCard,
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
