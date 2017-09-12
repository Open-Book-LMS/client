<template>
  <div id='courseTool'>
    <h2 class="assignment-title">{{this.$store.state.currentItem.name}}</h2>
    <p>
      {{this.$store.state.currentItem.description}}
    </p>
    <hr />
    <p>
      {{this.$store.state.currentItem.content}}
    </p>
  </div>
</template>
<script>
export default {
  name: 'courseTool',
  data() {
    return {
      assignmentId: this.$route.params.assignId,
    };
  },
  watch: {
    // eslint-disable-next-line
    $route: function(newRoute) {
      // eslint-disable-next-line
      console.log(this);
      this.$store.dispatch('getCurrentCourseItem', Number(newRoute.params.assignId));
    },
  },
  mounted() {
    this.$store.dispatch('getCurrentCourseItem', Number(this.assignmentId));
  },
};
</script>
<style lang="scss" scoped>
</style>
