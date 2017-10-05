<template>
  <div id='topbar'>
    <div class="topbar-content-wrapper">
      <profileCard></profileCard>
      <landButton class="button-flex" v-if="landButton"></landButton>
      <dashButton class="button-flex" v-if="!dashButton"></dashButton>
      <gradebookButton class="button-flex" v-if="gradebookButton"></gradebookButton>
      <toCourseButton class="button-flex" v-if="courseButton"></toCourseButton>
      <loginButton :clickEvent="showLogin" :isLogin="true" class="button-flex" v-if="authButton"></loginButton>
      <loginButton :clickEvent="showRegister" :isLogin="false" class="button-flex" v-if="authButton"></loginButton>
    </div>
    <div class="line"></div>

    <sweet-modal title="Login" ref="login">
	     <form class="authForm">
         <label for="loginEmail">Email:</label>
         <input name="loginEmail" type="email" v-model="loginUser.email"/>
         <label for="loginPassword">Password:</label>
         <input name="loginPassword" type="password" v-model="loginUser.password"/>
         <button @click.prevent="sendLogin()">Submit</button>
       </form>
    </sweet-modal>
    <sweet-modal title="Register" ref="register">
      <form class="authForm">
        <label for="regEmail">Email:</label>
        <input name="regEmail" type="email" v-model="registerUser.email"/>
        <label for="regPassword">Password:</label>
        <input name="regPassword" type="password" v-model="registerUser.password"/>
        <label for="regPasswordConfirm">Confirm Password</label>
        <input type="password" name="regPasswordConfirm" v-model="registerUser.passwordConfirm">
        <button @click.prevent="sendRegister()">Submit</button>
      </form>
    </sweet-modal>
  </div>
</template>
<script>
import Axios from 'axios';
import SweetModal from 'sweet-modal-vue/src/components/SweetModal';
import profileCard from '../assets/cards/profileCard';
import gradebookButton from '../assets/buttons/gradebookButton';
import toCourseButton from '../assets/buttons/toCourseButton';
import dashButton from '../assets/buttons/dashButton';
import landButton from '../assets/buttons/landButton';
import loginButton from '../assets/buttons/loginButton';

export default {
  name: 'topbar',
  components: {
    profileCard,
    gradebookButton,
    toCourseButton,
    dashButton,
    landButton,
    loginButton,
    SweetModal,
  },
  data() {
    return {
      loginUser: {
        email: '',
        password: '',
      },
      registerUser: {
        email: '',
        password: '',
        passwordConfirm: '',
      },
    };
  },
  computed: {
    gradebookButton() {
      const course = this.route === 'coursePage';
      const courseTool = this.route === 'courseTool';
      return course || courseTool;
    },
    courseButton() {
      const gradebookPage = this.route === 'gradebook';
      const assignmentView = this.route === 'assignmentGradebook';
      return gradebookPage || assignmentView;
    },
    dashButton() {
      const dashboard = this.route === 'Dashboard';
      const landingPage = this.route === 'landingPage';
      return dashboard || landingPage;
    },
    landButton() {
      const dashboard = this.route === 'Dashboard';
      return dashboard;
    },
    authButton() {
      const landingPage = this.route === 'landingPage';
      return landingPage;
    },
    route() {
      return this.$route.name;
    },
  },
  methods: {
    showLogin() {
      this.$refs.login.open();
    },
    showRegister() {
      this.$refs.register.open();
    },
    sendLogin() {
      Axios.post('http://localhost:3000/auth/login', this.loginUser)
      .then((res) => {
        console.log('login res', res);
        sessionStorage.setItem('token', res.data.token);
        this.$store.dispatch('getUserDatabyID', res.data.id);
        this.$refs.login.close();
        this.$router.push('/dashboard');
      });
    },
    sendRegister() {
      console.log('click');
    },
  },
};
</script>
<style lang="scss" scoped>
  $black-50: rgba(0, 0, 0, 0.5);

  .topbar-content-wrapper {
    display: grid;
    grid-template-columns: 5% 25% 20px auto 15% 5px 15% 5%;
  }
  .button-flex {
    align-self: end;
  }
  .line {
  	width: 90%;
    margin: auto;
  	height: 10px;
  	box-shadow: 0 2px 4px 0 $black-50;
  	background-color: #979797;
    margin-top: 25px;
  }
  .authForm {
    display: block;
  }
</style>
