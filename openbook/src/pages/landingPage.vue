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
      mainText: 'Welcome to Open Book, a lightweight, highly customizable Learning Management System. It provides an easy to navigate course structure and simple creation interfaces, for ease of use. The first major educational tool it showcases is a real time Drawing Demonstration tool, useful for online art instruction, a subject that lacks support in online education. The instructor can draw on a canvas that will be broadcast to students in real time, and chat with them during the demonstration. The future goals of the platform center heavily around providing resources for anyone to expand the available course tools, and move to bringing in the code on a per-item basis to avoid feature bloat. Please demo the site for yourself by using the links below to view both the instructor and student views.',
    };
  },
  watch: {
    //eslint-disable-next-line
    $route: function(newRoute){
      if (newRoute.params.name === 'landingPage') {
        this.$store.dispatch('clearState');
      }
    },
  },
  methods: {
    sendInstructor() {
      this.$store.dispatch('getUserDatabyID', 1);
      this.$router.push('/dashboard');
    },
    sendStudent() {
      this.$store.dispatch('getUserDatabyID', 3);
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
    padding-bottom: 10px;
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
    margin-bottom: 20px;
  }
  .link-style {
    cursor: pointer;
    color: $old-pink;
  }
  .link-style:hover {
    color: $slate-green;
  }
</style>
