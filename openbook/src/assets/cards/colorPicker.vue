<template>
  <div id='colorPicker'>
    <div class="blue" @click="color='blue'"></div>
  </div>
</template>
<script>
export default {
  name: 'colorPicker',
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
 .blue {
   background-color: blue;
 }
</style>
