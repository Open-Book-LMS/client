<template>
  <div id='announcementsCard'>
    <div class='padding-ffs' v-for="announcement in teacher" v-if="!isStudent">
      <announcementsListItem :announcementData="announcement"></announcementsListItem>
    </div>
    <div class='padding-ffs' v-for="announcement in student" v-if="isStudent">
      <announcementsListItem class='padding-ffs' :announcementData="announcement"></announcementsListItem>
    </div>
  </div>
</template>
<script>
import announcementsListItem from '../listItems/announcementsListItem';

export default {
  name: 'announcementsCard',
  components: {
    announcementsListItem,
  },
  data() {
    return {
      teacher: [
        'Course ART100 Art Appreciation starts October 16, 2017.',
      ],
      student: [
        'New course announcement for Printmaking 2: Printmaking Lab hours have been extending to include Saturday, October 7 for project work.',
        'New course announcement for Drawing Concepts 2: When working on your Drawing Assignments this week, remember that you can only use a monochromatic color scheme.',
      ],
    };
  },
  computed: {
    //eslint-disable-next-line
    isStudent: function() {
      return this.$store.state.currentUser.type === 'student';
    },
  },
};
</script>
<style lang="scss" scoped>
  $charcoal-grey: #4a4a4a;
  $white: #e9e9e9;
  $bright-blue: #4A90E2;
  $black-50: rgba(0, 0, 0, 0.5);

  #announcementsCard {
    grid-row: 2 / span 1;
    grid-column: 2 / span 3;
  	background-color: $white;
  	box-shadow: inset 0 1px 3px 0 $black-50;
    padding: 10px;
    // display: flex;
    // flex-direction: row;
    text-align: left;
  }
  .padding-fss {
    padding: 10px;
  }
</style>
