<template>
  <div id='chatListItem'>
    <span class="chat-name">{{chatItem.name}}: </span>
    <span>{{chatItem.message}}</span>
  </div>
</template>
<script>
export default {
  name: 'chatListItem',
  props: ['chatItem'],
};
</script>
<style lang="scss" scoped>
  $slate-green: #65826f;

  #chatListItem{
    text-align: left;
    line-height: 30px;
  }
  .chat-name{
    color: $slate-green;
    font-weight: 600;
  }
</style>
