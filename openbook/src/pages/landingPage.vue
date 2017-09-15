<template>
  <div id='landingPage'>
    <div class="hero-box">
      <img src="../../static/DJI_0029-edit.jpg" alt="Open Book LMS" class="hero-img">
      {{ mainText }}
    </div>
    <div class="left-box">
      <h1><a class="link-style" @click="sendInstructor">Instructor</a></h1>
    </div>
    <div class="right-box">
      <h1><a class="link-style" @click="sendStudent">Student</a></h1>
    </div>
  </div>
</template>
<script>
export default {
  name: 'landingPage',
  data() {
    return {
      mainText: 'Hello',
    };
  },
  methods: {
    sendInstructor() {
      this.$store.dispatch('setUserType', { type: 'INST' });
      this.$router.push('/dashboard');
    },
    sendStudent() {
      this.$store.dispatch('setUserType', { type: 'STU' });
      this.$router.push('/dashboard');
    },
  },
};
</script>
<style lang="scss" scoped>
  $charcoal-grey: #4a4a4a;
  $white: #e9e9e9;
  $black-50: rgba(0, 0, 0, 0.5);
  $old-pink: #c4688d;
  $slate-green: #65826f;

  #landingPage {
    display: grid;
    grid-template-columns: 5% 40% 10% 40% 5%;
    grid-template-rows: 45% 25%;
  }
  .hero-box {
    margin-top: 10px;
    grid-column: 2 / span 3;
    grid-row: 1 / span 1;
    min-height: 200px;
  	background-color: $white;
  	box-shadow: inset 0 1px 3px 0 $black-50;
  }
  .left-box {
    margin-top: 10px;
    grid-row: 2 / span 1;
    grid-column: 2 / span 1;
    background-color: $white;
    min-height: 200px;
    box-shadow: inset 0 1px 3px 0 $black-50;
  }
  .right-box {
    margin-top: 10px;
    grid-row: 2 / span 1;
    grid-column: 4 / span 1;
    background-color: $white;
    min-height: 200px;
    box-shadow: inset 0 1px 3px 0 $black-50;
  }
  .hero-img {
    width: 100%;
    box-shadow: 0 2px 4px 0 $black-50;
  }
  .link-style {
    cursor: pointer;
    color: $old-pink;
  }
  .link-style:hover {
    color: $slate-green;
  }
</style>
