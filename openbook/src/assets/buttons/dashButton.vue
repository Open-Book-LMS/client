<template>
  <div id='dashButton'>
    <router-link class="dash-link" to='/dashboard' exact>
      <div class="dash-button">
          <span class="dash-text">Exit Course</span>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'dashButton',
};
</script>
<style lang="scss" scoped>
$slate-green: #65826f;
$black-50: rgba(0, 0, 0, 0.5);

  #dashButton {
    grid-column: 5 / span 1;
  }
  .dash-button {
    height: 41px;
  	border-radius: 8px;
  	background-color: $slate-green;
  	box-shadow: 0 2px 4px 0 $black-50;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .dash-link {
    text-decoration: none;
  }
  .dash-text {
    font-family: ArticulatCFv2;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    color: #ffffff;
    vertical-align: middle;
  }
</style>
