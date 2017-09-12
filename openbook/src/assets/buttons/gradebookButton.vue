<template>
  <div id='gradebookButton'>
    <span>Gradebook</span>
  </div>
</template>
<script>
export default {
  name: 'gradebookButton',
};
</script>
<style lang="scss" scoped>
  $old-pink: #c4688d;
  $black-50: rgba(0, 0, 0, 0.5);

  #gradebookButton {
  	height: 41px;
  	border-radius: 8px;
  	background-color: $old-pink;
  	box-shadow: 0 2px 4px 0 $black-50;
    grid-column: 5 / span 1;
    overflow: none;
  }

</style>
