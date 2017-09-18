<template>
  <div id='profileCard' class="profile-background">
    <div class="profile-imgage-container">
        <img class="profile-image" :src="selectImage" alt="OpenBook profile image"/>
      </div>
      <span class="title">
        {{selectTitle}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profileCard',
  computed: {
    selectImage() {
      if (this.$route.name === 'Dashboard' || this.$route.name === 'landingPage') {
        return '../../../static/logo.png';
      }
      return '';
    },
    selectTitle() {
      const user = this.$store.state.currentUser;
      if (this.$route.name === 'landingPage') {
        return 'Open Book';
      }
      return `${user.first_name} ${user.last_name}`;
    },
  },
};
</script>
<style lang="scss" scoped>
$white: #e9e9e9;
$black-50: rgba(0, 0, 0, 0.5);
$slate-green: #65826f;
$charcoal-grey: #4a4a4a;

.profile-background {
	height: 74px;
  grid-column: 2 / span 1;
	border-radius: 8px;
	background-color: $white;
	box-shadow: inset 0 1px 3px 0 $black-50;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  grid-template-columns: 10px 90px 10px auto;
  min-width: 400px;
}

.profile-image {
  margin-left: 20px;
	width: 90px;
	height: 90px;
  // float:left;
  background-color: white;
  // clip-path: circle(45px at center);
  // border: solid 1px $charcoal-grey;
  border-radius: 90%;
  box-shadow: 0 2px 4px 0 $black-50;
  // margin-top: -10px;
  // clip-path: circle(45px at center);
}

.profile-imgage-container {
    // float:left;
    // margin-left: 10px;
    // background-color: white;
    // clip-path: circle(40px at center);
    // border: solid 1px $charcoal-grey;
    // border-radius: 45px;
  	// box-shadow: 0 2px 4px 0 $black-50;
}

.title {
	font-family: ArticulatCFv2;
	font-size: 36px;
	font-weight: 900;
	line-height: 0.72;
	color: $slate-green;
  vertical-align: middle;
  padding-left: 20px;
}
</style>
