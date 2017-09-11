<template>
  <div id='courseContent'>

  </div>
</template>
<script>
export default {
  name: 'courseContent',
};
</script>
<style lang="scss" scoped>
  $black-50: rgba(0, 0, 0, 0.5);

  #courseContent {
  	background-color: #ffffff;
  	box-shadow: inset 0 1px 3px 0 $black-50;
    grid-column: 4 / span 1;
  }
</style>
