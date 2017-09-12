<template>
  <div id='courseNavigationListItem'>
    <div class="item-title-wrapper">
      <router-link :to="{ name: 'courseTool', params: { assignId: itemData.id}}"><span class="item-title">{{itemData.name}}</span></router-link><br />
      <span class="item-due-date">{{itemData.end_date}}</span>
      <div class="edit-item">
        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'courseNavigationListItem',
  props: ['itemData'],
};
</script>
<style lang="scss" scoped>
  $charcoal-grey: #4a4a4a;

  #courseNavigationListItem {
    display: subgrid;
  }
  .item-title-wrapper {
    margin: 20px;
    padding: 10px;
    border-bottom: 1px solid $charcoal-grey;
    text-align: left;
  }
  .edit-item{
    text-align: right;
  }
  .item-title {
    font-family: AvenirNext;
    font-size: 18px;
    font-weight: 600;
    text-align: left;
    color: $charcoal-grey;
  }
</style>
