<template>
  <div id='chatCard'>
    <div class="chat-wrapper">
      <div v-for="chatItem in chatData">
        <chatListItem :chatItem="chatItem"></chatListItem>
      </div>
    </div>
    <div class="input-wrapper">
      <input class="text-input" v-model="chatMessage" placeholder="Message"/>
      <button @click="sendMessage">Send</button>
    </div>
  </div>
</template>
<script>
import chatListItem from '../listItems/chatListItem';

export default {
  name: 'chatCard',
  props: ['sendButton', 'chatData'],
  components: {
    chatListItem,
  },
  data() {
    return {
      chatMessage: '',
    };
  },
  methods: {
    sendMessage() {
      this.sendButton(this.chatMessage);
      this.chatMessage = '';
    },
  },
};
</script>
<style lang="scss" scoped>
  $old-pink: #c4688d;
  $slate-green: #65826f;
  $charcoal-grey: #4a4a4a;
  $white: #e9e9e9;

  #chatCard {
    min-height: 200px;
    padding: 20px;
    border: 1px solid $charcoal-grey;
    max-height: 300px;
  }
  .chat-wrapper{
    overflow-y: scroll;
    max-height: 250px;
  }
  .input-wrapper {
    width: 100%;
    display: subgrid;
    grid-template-columns: 5% 65% 5% 20% 5%;
  }
  .text-input {
    width: 75%;
  }
  .send-button {
    width: 25%;
  }
</style>
