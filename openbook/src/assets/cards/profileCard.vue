<template>
  <div id='profileCard'>
    <div>
      <!-- <img class="profile-image" :src="selectImage" alt="OpenBook profile image"/> -->
    </div>
    <div class="profile-background">
      <p class="title">
        Name
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profileCard',
  // computed: {
  //   selectImage() {
  //     if(this.$route.name == 'Dashboard'){
  //
  //     }
  //   },
  //   selectTitle() {
  //     if() {
  //
  //     } else if() {
  //
  //     } else {
  //
  //     }
  //   },
  // },
};
</script>
<style lang="scss" scoped>
$white: #e9e9e9;
$black-50: rgba(0, 0, 0, 0.5);
$slate-green: #65826f;

.profile-background {
	width: 314px;
	height: 74px;
	border-radius: 8px;
	background-color: $white;
	box-shadow: inset 0 1px 3px 0 $black-50;
}

.profile-image {
	width: 90px;
	height: 90px;
  clip-path: circle(45px at center);
	box-shadow: 0 2px 4px 0 $black-50;
}

.title {
	font-family: ArticulatCFv2;
	font-size: 36px;
	font-weight: 900;
	line-height: 0.72;
	text-align: left;
	color: $slate-green;
}
</style>
