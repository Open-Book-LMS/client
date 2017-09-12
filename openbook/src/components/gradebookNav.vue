<template>
  <div id='gradebookNav'>
    <router-link class="gradebook-view-link" v-bind:class="{'active-link' : assignView}" :to="{ name: 'assignmentGradebook'}" exact>Assignment View</router-link>
    <router-link class="gradebook-view-link" v-bind:class="{'active-link' : rosterView}" :to="{ name: 'rosterGradebook' }" exact>Roster View</router-link>
  </div>
</template>
<script>
export default {
  name: 'gradebookNav',
  data() {
    return {
      rosterView: this.$route.path === '/gradebook/roster',
      assignView: this.$route.path === '/gradebook/assignment',
    };
  },
};
</script>
<style lang="scss" scoped>
  $charcoal-grey: #4a4a4a;

  #gradebookNav{
    text-align: left;
    margin-left: 5%;
  }
  .gradebook-view-link {
  	font-family: AvenirNext;
  	font-size: 20px;
  	font-weight: 600;
  	text-align: left;
  	color: $charcoal-grey;
    text-decoration: none;
  }
  .active-link {
    border-bottom: .5px solid $charcoal-grey;
  }
</style>
