<template>
	<div id="footer">
		<div class="footBg">
			<!--<router-link 
				v-for="(item,index) in $router.options.routes[0].children" 
				tag="li"  
				:to="item.path" 
				active-class="active" 循环子路由
				:key="item.path">{{item.name}}</router-link>-->
			<!--<router-link v-for="(item,index) in $router.options.routes" 
				tag="li"  
				:to="item.path" 
				active-class="active" 
				:key="item.path" exact>{{item.name}}</router-link>	-->
				<router-link tag="li" :to="{ path: '/' }" active-class="active icon iconfont-ali icon-ail-homefill" :key="home" exact>
					<i class="icon iconfont-ali icon-ail-home" v-show="ishome"></i>
					<div >首页</div>
				</router-link>
				<router-link tag="li" :to="{ path: '/category' }" active-class="active icon iconfont-ali icon-ail-circlefill" :key="category" exact>
					<i class="icon iconfont-ali icon-ail-circle" v-show="iscircle"></i>
					<div>分类</div>
				</router-link>
				<router-link tag="li" :to="{ path: '/shoppingCar' }" active-class="active icon iconfont-ali icon-ail-cartfill" :key="shoppingCar" exact>
					<i class="icon iconfont-ali icon-ail-cart" v-show="iscart"></i>
					<div>购物车</div>
				</router-link>
				<router-link tag="li" :to="{ path: '/myMassage' }" active-class="active icon iconfont-ali icon-ail-peoplefill" :key="myMassage" exact>
					<i class="icon iconfont-ali icon-ail-people" v-show="ispeople"></i>
					<div>我的</div>
				</router-link>
		</div>
	</div>
</template>

<script>
//	import myFooter from 'src/components/login'
export default {
  name: 'footer',
   data () {
      return {
     	myMassage:'',
     	shoppingCar:'',
     	category:'',
     	home:'',
     	ishome:true,
     	iscart:true,
     	iscircle:true,
     	ispeople:true
      }
   },
     watch: {
  	'$route' (to, from){ 		
  		this.$route.name=='首页'?this.ishome=false: this.ishome=true		  		
  		this.$route.name=='分类'?this.iscircle=false: this.iscircle=true	  		
  		this.$route.name=='购物车'?this.iscart=false: this.iscart=true	 		
  		this.$route.name=='我的'?this.ispeople=false: this.ispeople=true	
//		console.log(this.$route)
	}
  },
  mounted(){ 
//	console.log(this.$route)
  	if (this.$route.name=='分类') {
  		this.iscircle=false
  	}
  	if (this.$route.name=='首页') {
  		this.ishome=false
  	}
  	if (this.$route.name=='购物车') {
  		this.iscart=false
  	}
  	if (this.$route.name=='我的') {
  		this.ispeople=false
  	}
  }
   
}

</script>

<style scoped>
.footBg{
	display: flex;
  justify-content: space-around;
	width: 7.5rem;
	height: 0.98rem;
	background: white;
	border-top: 1px solid gainsboro;
	position: fixed;
  bottom: 0;
}
ul {
  list-style-type: none;
  padding: 0;
  
}

li {
  display: inline-block;
  /* padding: 0.15rem 0.57rem; */
  /* line-height: 0.4rem; */
  color: gray;
  font-size: 0.2rem;
}
.icon-shouye{
	
}
.active{color: #c89bf1;}
.iconfont-ali {

  font-size:0.4rem;

}
.iconfont-ali div{
	font-size: 0.24rem;
}
</style>