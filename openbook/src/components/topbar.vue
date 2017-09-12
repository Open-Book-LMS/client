<template>
  <div id='topbar'>
    <div class="topbar-content-wrapper">
      <profileCard></profileCard>
      <gradebookButton></gradebookButton>
    </div>
    <div class="line"></div>
  </div>
</template>
<script>
import profileCard from '../assets/cards/profileCard';
import gradebookButton from '../assets/buttons/gradebookButton';

export default {
  name: 'topbar',
  components: {
    profileCard,
    gradebookButton,
  },
};
</script>
<style lang="scss" scoped>
  $black-50: rgba(0, 0, 0, 0.5);

  .topbar-content-wrapper {
    display: grid;
    grid-template-columns: 5% 25% 20px auto 10% 5%;
  }
  .line {
  	width: 90%;
    margin: auto;
  	height: 10px;
  	box-shadow: 0 2px 4px 0 $black-50;
  	background-color: #979797;
    margin-top: 25px;
  }
</style>
