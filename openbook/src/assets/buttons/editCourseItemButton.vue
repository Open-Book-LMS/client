<template>
  <div id='editCourseItemButton'>
    <router-link class="edit-button link-style" :to="{ name: 'editCourseItem', params: {assignId: AssignID}}" exact><i class="fa fa-pencil-square-o" aria-hidden="true"></i></router-link>
  </div>
</template>
<script>
export default {
  name: 'editCourseItemButton',
  props: ['AssignID'],
};
</script>
<style lang="scss" scoped>
  $old-pink: #c4688d;

  .link-style {
    text-decoration: none;
  }
  .edit-button:hover{
    color: $old-pink;
  }
</style>
