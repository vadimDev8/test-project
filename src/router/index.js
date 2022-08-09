import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

Vue.use(VueRouter)

const routes = [
	{
		path: '/register',
		name: 'register',
		meta: {layout: 'empty', auth: false},
		component: () => import('../views/Register.vue')
	},
	{
		path: '/login',
		name: 'login',
		meta: {layout: 'empty', auth: false},
		component: () => import('../views/Login.vue')
	},
	{
		path: '/',
		name: 'home',
		meta: {layout: 'main', auth: true},
		component: () => import('../views/Home.vue')
	},
	{
		path: '/result',
		name: 'result',
		meta: {layout: 'main', auth: true},
		component: () => import('../views/Result.vue')
	},
	{
		path: '/test',
		name: 'test',
		meta: {layout: 'main', auth: true},
		component: () => import('../views/Test.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	const currentUser = firebase.auth().currentUser
	const reqireAuth = to.matched.some(record => record.meta.auth)
	if (reqireAuth && !currentUser) {
		next('/login')
	} else {
		next()
	}
})
export default router
