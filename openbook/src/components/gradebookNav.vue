<template>
  <div id='gradebookNav'>
    <router-link class="gradebook-view-link" to="assignmentView">Assignment View</router-link>
    <router-link class="gradebook-view-link" to="rosterView">Roster View</router-link>
  </div>
</template>
<script>
export default {
  name: 'gradebookNav',
  data() {
    return {
      rosterView: this.$route.name,
      assignView: this.$route.name,
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
