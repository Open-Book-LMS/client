<template>
  <div id='announcementsCard'>
    <div v-for="announcement in teacher" v-if="!isStudent">
      <announcementsListItem :announcementData="announcement"></announcementsListItem>
    </div>
    <div v-for="announcement in student" v-if="isStudent">
      <announcementsListItem :announcementData="announcement"></announcementsListItem>
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
    isStudent: () => this.$store.state.currentUser.type === 'student',
  },
};
</script>
<style lang="scss" scoped>
</style>
