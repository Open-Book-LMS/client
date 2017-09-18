<template>
  <div id='gradebookButton'>
    <router-link to='/gradebook' class="gradebook-link" exact>
        <div class="gradebook-button">
          <span class="gradebook-text">{{isStudent ? studentGrade : 'Gradebook'}}</span>
        </div>
      </router-link>
  </div>
</template>
<script>
export default {
  name: 'gradebookButton',
  data() {
    return {
      isStudent: this.$store.state.currentUser.type === 'student',
      studentGrade: this.$store.state.currentUser.grade,
    };
  },
};
</script>
<style lang="scss" scoped>
  $old-pink: #c4688d;
  $black-50: rgba(0, 0, 0, 0.5);

  #gradebookButton {
    grid-column: 7 / span 1;
  }
  .gradebook-link {
    text-decoration: none;
  }
  .gradebook-button {
  	height: 41px;
    min-width: 100px;
  	border-radius: 8px;
  	background-color: $old-pink;
  	box-shadow: 0 2px 4px 0 $black-50;
    overflow: none;
    display:flex;
    align-items: center;
    justify-content: center;
  }
  .gradebook-text {
  	font-family: ArticulatCFv2;
  	font-size: 18px;
  	font-weight: 600;
  	text-align: center;
  	color: #ffffff;
    vertical-align: middle;
    padding: 10px;
  }

</style>
