<template>
  <div id='participantsCard'>
    <h3>Participants</h3>
    <div v-for="participantData in participants">
      <participantsListItem :participantData="participantData"></participantsListItem>
    </div>
  </div>
</template>
<script>
import participantsListItem from '../listItems/participantsListItem';

export default {
  name: 'participantsCard',
  components: {
    participantsListItem,
  },
  data() {
    return {
      participants: [
        'Kathryn Jimenez',
        'Maude Peters',
        'Micheal Roy',
        'Mildred Wells',
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
  $old-pink: #c4688d;
  $slate-green: #65826f;
  $charcoal-grey: #4a4a4a;

  #participantsCard {
    border: 1px solid $charcoal-grey;
  }
  h3 {
    color: $old-pink;
  }
</style>
