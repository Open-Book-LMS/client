<template>
  <div id='topbar'>
    <profileCard></profileCard>
    <div class="line">

    </div>
  </div>
</template>
<script>
import profileCard from '../assets/cards/profileCard';

export default {
  name: 'topbar',
  components: {
    profileCard,
  },
};
</script>
<style lang="scss" scoped>
$black-50: rgba(0, 0, 0, 0.5);

.line {
	width: 90%;
  margin: auto;
	height: 10px;
	box-shadow: 0 2px 4px 0 $black-50;
	background-color: #979797;
  margin-top: 25px;
}
</style>
