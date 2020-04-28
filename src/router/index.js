import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import login from '@/components/login'
import search from '@/components/search'
import home from '@/views/home'
import category from '@/views/category'
import myMassage from '@/views/myMassage'
import message from '@/views/message'
import shoppingCar from '@/views/shoppingCar'
import shoplist from '@/views/homeChildren/shoplist'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component:home,
//    children:[
//    	{
//    		 path: '/shoplist',
//			     name: '商品列表',
//			     component: shoplist
//    	}
//    ]
    },
      {
      path: '/category',
      name: '分类',
      component: category
    	}, 
    	{
      path: '/message',
      name: '消息',
      component: message
   		},
    	{
      path: '/shoppingCar',
      name: '购物车',
      component: shoppingCar
   		},
    	{
      path: '/myMassage',
      name: '我的',
      component: myMassage
   		},
   		{
      		 path: '/shoplist',
			     name: '商品列表',
			     component: shoplist
      },
      {
      		 path: '/login',
			     name: '登录',
			     component: login
      },
      {
      		 path: '/search',
			     name: '搜索',
			     component: search
      	}
  ]
})
//router.beforeEach((to, from, next) => {
//		if(!Util.getLocalStorage('users')&& to.path != '/one'){
//			next({
//				path:'/one'
//			})
//		}else{
//			next()
//		}
//
//});

export default router