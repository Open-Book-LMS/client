<template>
  <div id='loginButton' class="login-button" :class="{'register-button': !isLogin}">
    <div @click="clickEvent()" class="land-button" v-if="isLogin">
      <span class="land-text">Login</span>
    </div>
    <div @click="clickEvent()" class="land-button" v-if="!isLogin">
      <span class="land-text">Register</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'loginButton',
  props: ['clickEvent', 'isLogin'],
};
</script>
<style lang="scss" scoped>
$slate-green: #65826f;
$black-50: rgba(0, 0, 0, 0.5);

// #loginButton {
//   grid-column: 5 / span 1;
// }
.login-button {
  grid-column: 5 / span 1;
}
.register-button {
  grid-column: 7 / span 1;
}
.land-button {
  height: 41px;
  border-radius: 8px;
  background-color: $slate-green;
  box-shadow: 0 2px 4px 0 $black-50;
  display: flex;
  align-items: center;
  justify-content: center;
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
