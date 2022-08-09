<template>
  <div id="app">
		<component :is="layout">
			<router-view />
		</component>
  </div>
</template>
<script>
import EmptyLayout from './layout/EmptyLayout.vue'
import MainLayout from './layout/MainLayout.vue'
export default {
  components: {
    EmptyLayout,
    MainLayout
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  }
}
</script>
<style>
	.register__form-submit{
        display: inline-block;
        background: linear-gradient(to right, rgb(115, 73, 255), rgb(89, 52, 171));
        color: rgb(255, 255, 255);
        padding: 7px 23px;
        font-size: 1.1em;
        font-weight: 400;
        border-radius: 5px;
        transition: all 0.2s ease 0s;
        min-width: 150px;
        padding: 13px 35px 13px;
        text-align: center;
        cursor: pointer;
        text-decoration: none;
        margin-bottom: 10px;
    }
    .register__form-submit:hover{ 
        transition: all 0.2s ease 0s; 
        box-shadow: rgb(115 72 254 / 40%) 0px 4px 10px;
    }
	#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	}

	nav {
	padding: 30px;
	}

	nav a {
	font-weight: bold;
	color: #2c3e50;
	}

	nav a.router-link-exact-active {
	color: #42b983;
	}
	.container{
        max-width: 1140px;
        margin: 0 auto;
        padding: 0 15px;
        box-sizing: border-box;
        position: relative;
    }
	.register__form-submit, 
	.test__item-text__btn,
	.login__form-submit,
    .login__form-register,
	.test__form-submit{
        display: inline-block;
        background: linear-gradient(to right, rgb(115, 73, 255), rgb(89, 52, 171));
        color: rgb(255, 255, 255);
        padding: 7px 23px;
        font-size: 1.1em;
        font-weight: 400;
        border-radius: 5px;
        transition: all 0.2s ease 0s;
        min-width: 150px;
        padding: 13px 35px 13px;
        text-align: center;
        cursor: pointer;
        text-decoration: none;
        margin-bottom: 10px;
    }
    .register__form-submit:hover,
	.test__item-text__btn:hover,
	.login__form-submit:hover,
    .login__form-register:hover,
	.test__form-submit:hover{ 
        transition: all 0.2s ease 0s; 
        box-shadow: rgb(115 72 254 / 40%) 0px 4px 10px;
    }
</style>
