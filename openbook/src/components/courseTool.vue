<template>
  <div id='courseTool'>
    <articleItem v-if="assignmentType === 'ART'"></articleItem>
    <canvasBroadcast v-if="assignmentType === 'CBC'"></canvasBroadcast>
  </div>
</template>
<script>
import articleItem from './articleItem';
import canvasBroadcast from './canvasBroadcast';

export default {
  name: 'courseTool',
  components: {
    articleItem,
    canvasBroadcast,
  },
  data() {
    return {
      assignmentId: this.$route.params.assignId,
    };
  },
  watch: {
    // eslint-disable-next-line
    $route: function(newRoute) {
      // eslint-disable-next-line
      this.$store.dispatch('getCurrentCourseItem', newRoute.params.assignId)
      // .then(() => {
      //   // eslint-disable-next-line
      //   console.log('currentItem', this.$store.state.currentItem);
      //   this.assignmentType = this.$store.state.currentItem.tool_type;
      // });
    },
  },
  computed: {
    // eslint-disable-next-line
    assignmentType: function() {
      return this.$store.state.currentItem.tool_type;
    },
  },
  mounted() {
    this.$store.dispatch('getCurrentCourseItem', this.assignmentId);
    // .then(() => {
    //   this.assignmentType = this.$store.getters.toolType;
    // });
  },
};
</script>
<style lang="scss" scoped>
</style>
