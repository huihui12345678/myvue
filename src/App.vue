<template>
  <div id="app">
 <!--<img src="./assets/logo.png"/>-->
 <!--<myHeader :classShow='classShow' :classView='false'></myHeader>-->
 <myMain>
 	<!--<router-view></router-view>-->
 </myMain>
    <!--<router-view></router-view>-->
    
 <myFooter v-show='fooView'></myFooter>   
    
  </div>
</template>

<script>
//import myHeader from './components/header'
import myFooter from './components/footer'
import myMain from './components/main'
export default {
  name: 'app',
  data () {
      return {
     	classShow:true,
     	classView:true,
     	fooView:true
      }
   },
  components: {
//			myHeader,
			myFooter,
			myMain
  },
   watch: {
	'$route' (to, from){
	  	 if(this.$route.name=='首页'||this.$route.name=='分类'||this.$route.name=='购物车'||this.$route.name=='我的'){
	  			this.fooView=true
	  		}else{

	  			this.fooView=false;
	  		}
		}

  },
    mounted(){
      if(this.$route.name=='首页'||this.$route.name=='分类'||this.$route.name=='购物车'||this.$route.name=='我的'){
	  			this.fooView=true
	  		}else{

	  			this.fooView=false;
	  		}
  }
}
</script>

<style>
   @import '~@/assets/icon/iconfont.css'
 

</style>
