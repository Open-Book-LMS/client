<template>
  <div id='landButton'>
    <router-link class="land-link" to='/'>
      <div class="land-button">
        <span class="land-text">To Home</span>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'landButton',
};
</script>
<style lang="scss" scoped>
  $slate-green: #65826f;
  $black-50: rgba(0, 0, 0, 0.5);

  #landButton {
    grid-column: 5 / span 1;
  }
  .land-button {
    height: 41px;
    border-radius: 8px;
    background-color: $slate-green;
    box-shadow: 0 2px 4px 0 $black-50;
    color: white;
  }
  .land-link {
    text-decoration: none;
  }
  .land-text {
    font-family: ArticulatCFv2;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    color: #ffffff;
    vertical-align: middle;
  }
</style>
