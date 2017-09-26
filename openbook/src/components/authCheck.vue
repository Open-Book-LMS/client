<template>
  <div id='authCheck'>

  </div>
</template>
<script>
export default {
  name: 'authCheck',
  mounted() {
    const token = sessionStorage.getItem('token');
    if(!token){
      this.$route.push('landingPage');
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
