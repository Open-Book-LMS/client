<template>
  <div id='newItemButton'>
    <router-link class="new-link" :to="{ name: 'newCourseTool'}" exact><h2>New Item <i class="fa fa-plus-square-o" aria-hidden="true"></i></h2></router-link>
  </div>
</template>
<script>
export default {
  name: 'newItemButton',
};
</script>
<style lang="scss" scoped>
  $charcoal-grey: #4a4a4a;
  $old-pink: #c4688d;

  #newItemButton {
    border-bottom: 1px solid $charcoal-grey;
  }
  .new-link {
    text-decoration: none;
    color: $charcoal-grey;
  }
  .new-link:hover {
    color: $old-pink;
  }
</style>
