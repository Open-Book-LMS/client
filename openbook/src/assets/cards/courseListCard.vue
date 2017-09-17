<template>
  <div id='courseListCard' class="course-list-container">
    <div v-for="course in $store.state.courseList">
      <courseListItem :course="course"></courseListItem>
    </div>
  </div>
</template>
<script>
import courseListItem from '../listItems/courseListItem';

export default {
  name: 'courseListCard',
  components: {
    courseListItem,
  },
};
</script>
<style lang="scss" scoped>
$white: #e9e9e9;
$black-50: rgba(0, 0, 0, 0.5);

.course-list-container {
	grid-column: 2 / span 1;
	background-color: $white;
	box-shadow: inset 0 1px 3px 0 $black-50;
}
</style>
