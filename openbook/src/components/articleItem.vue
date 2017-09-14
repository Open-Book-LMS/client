<template>
  <div id='articleItem'>
    <h2 class="assignment-title">{{assignData.name}}</h2>
    <p>
      {{assignData.description}}
    </p>
    <hr />
    <p>
      {{assignData.content}}
    </p>
  </div>
</template>
<script>
export default {
  name: 'articleItem',
  computed: {
    // eslint-disable-next-line
    assignData: function () {
      return this.$store.state.currentItem;
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
