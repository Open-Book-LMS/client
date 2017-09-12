<template>
  <div id='courseNavigationCard' class="navigation-background">
    <newItemButton></newItemButton>
    <div v-for="item in this.$store.state.courseNav">
      <courseNavigationListItem :itemData="item"></courseNavigationListItem>
    </div>
  </div>
</template>
<script>
import courseNavigationListItem from '../listItems/courseNavigationListItem';
import newItemButton from '../buttons/newItemButton';

export default {
  name: 'courseNavigationCard',
  components: {
    courseNavigationListItem,
    newItemButton,
  },
  mounted() {
    // eslint-disable-next-line
    console.log(this.$store.state.courseNav)
  },
};
</script>
<style lang="scss" scoped>
$white: #e9e9e9;
$black-50: rgba(0, 0, 0, 0.5);

.navigation-background {
	background-color: $white;
	box-shadow: inset 0 1px 3px 0 $black-50;
  // margin-top: 50px;
  // margin-left: 20px;
  grid-column: 2 / span 1;
}
</style>
