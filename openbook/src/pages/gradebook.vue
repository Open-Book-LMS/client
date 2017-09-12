<template>
  <div id='gradebook'>
    <h3>
      Gradebook
    </h3>
    <gradebookNav></gradebookNav>
    <router-view></router-view>
  </div>
</template>
<script>
import gradebookNav from '../components/gradebookNav';

export default {
  name: 'gradebook',
  components: {
    gradebookNav,
  },
};
</script>
<style lang="scss" scoped>

</style>
