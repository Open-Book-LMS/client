<template>
  <div id='courseNavLegend'>
    <p>
      <span><i class="fa fa-check-square-o" aria-hidden="true"></i> - Submitted</span>
    </p>
    <p>
      <span><i class="fa fa-star" aria-hidden="true"></i> - Graded</span>
    </p>
  </div>
</template>
<script>
export default {
  name: 'courseNavLegend',
};
</script>
<style lang="scss" scoped>
  $charcoal-grey: #4a4a4a;

  #courseNavLegend {
    border-bottom: 1px solid $charcoal-grey;
  }
</style>
