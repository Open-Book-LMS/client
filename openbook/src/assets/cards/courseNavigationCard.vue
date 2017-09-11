<template>
  <div id='courseNavigationCard' class="navigation-background">

  </div>
</template>
<script>
import courseNavigationListItem from '../listItems/courseNavigationListItem';

export default {
  name: 'courseNavigationCard',
  components: {
    courseNavigationListItem,
  },
  data() {

  },
};
</script>
<style lang="scss" scoped>
$white: #e9e9e9;
$black-50: rgba(0, 0, 0, 0.5);

.navigation-background {
	width: 314px;
	height: 814px;
	background-color: $white;
	box-shadow: inset 0 1px 3px 0 $black-50;
  margin-top: 50px;
  margin-left: 20px;
}
</style>
