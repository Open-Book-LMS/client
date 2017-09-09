<template>
  <div id="app">
    <topbar></topbar>
    <router-view></router-view>
  </div>
</template>

<script>
import topbar from './components/topbar';

export default {
  name: 'app',
  components: {
    topbar,
  },
};
</script>

<style lang="scss">
/* Color palette */
$scarlet: #d0011b;
$apple-green: #7ed321;
$old-pink: #c4688d;
$slate-green: #65826f;
$charcoal-grey: #4a4a4a;
$white: #e9e9e9;
$black-50: rgba(0, 0, 0, 0.5);

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $charcoal-grey;
  margin-top: 60px;
}

@mixin rounded($amount) {
  -moz-border-radius: $amount;
  -webkit-border-radius: $amount;
  border-radius: $amount;
}
</style>
