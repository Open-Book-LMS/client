<template>
  <div id='gradeRubricListItemInst'>
    <p>
      <span v-if="criteriaMet"><i class="fa fa-check-circle-o" aria-hidden="true"></i></span>
      <span v-if="!criteriaMet"><i class="fa fa-circle-o" aria-hidden="true"></i></span>
      {{itemData.text}}
    </p>
  </div>
</template>
<script>
export default {
  name: 'gradeRubricListItemInst',
  props: ['itemData'],
  data() {
    return {
      criteriaMet: this.itemData.met,
    };
  },
};
</script>
<style lang="scss" scoped>
  #gradeRubricListItemInst {
    text-align: left;
  }
</style>
