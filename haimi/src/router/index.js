import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page/home'
import Classify from '@/components/page/classify'
import Shopcar from '@/components/page/shopcar'
import Login from '@/components/page/login'
import My from '@/components/page/my'
import xiangqing1 from '@/components/page/xiangqing'
Vue.use(Router)

export default new Router({
	mode: 'history',
	scrollBehavior (to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		}else {
			return { x: 0, y: 0 }
		}
	},
	routes: [
		{
			path: "/",
			redirect: '/home'
		},
		{
			path: "/home",
			name: "Home",
			component: Home
		},
		{
			path: "/classify",
			name: "Classify",
			component: Classify
		},
		{
			path: "/shopcar",
			name: "Shopcar",
			component: Shopcar
		},
		{
			path: "/login",
			name: "Login",
			component: Login
		},
		{
			path: "/my",
			name: "My",
			component: My
		},
		{
			path: "/xiangqing1/:id",
			name: "xiangqing1",
			component: xiangqing1
		}

	]
})
