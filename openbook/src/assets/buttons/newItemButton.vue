<template>
  <div id='newItemButton'>
    <h2>New Item <i class="fa fa-plus-square-o" aria-hidden="true"></i></h2>
  </div>
</template>
<script>
export default {
  name: 'newItemButton',
};
</script>
<style lang="scss" scoped>
  $charcoal-grey: #4a4a4a;

  #newItemButton {
    border-bottom: 1px solid $charcoal-grey;
  }
</style>
