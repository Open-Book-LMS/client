<template>
  <div id='annoucementListItem'>
      <p class="announcement-text"> {{announcementData}}</p>
  </div>
</template>
<script>
export default {
  name: 'annoucementListItem',
  props: ['announcementData'],
};
</script>
<style lang="scss" scoped>
  $charcoal-grey: #4a4a4a;

  #announcementsListItem {
    grid-template-columns: 10% 80%;
  }
  .announcement-star {
    grid-column: 1 / span 1;
  }
  .announcement-text-wrapper {
    grid-column: 2 / span 1;
  }
  .announcement-text{
    font-family: ArticulatCFv2;
    font-size: 20px;
    font-weight: 300;
    text-align: left;
    color: $charcoal-grey;
  }

</style>
