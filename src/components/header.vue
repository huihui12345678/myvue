<template>
	<div id="header" class="header" :class="{ 'header-per': headColor1,'header-gay':headColor2 }">
		<div class="headerbox">
			<span class="iconCorol" v-show="classView">
				<router-link tag="li" :to="{ path: '/login' }" active-class="active"  class="iconCorol">
					扫
				</router-link>
			</span>
			<span class="iconCorol " v-show="classShow" @click="back" :class="{blackFont:blackFont}">
				返回 
			</span>
			<!--购物车-->
			<span class="iconCorol " v-show="classcar?classcar:classcar1" @click="manage1" >
				管理
			</span>
			<div class="mar_test1" v-show="classcar?classcar:classcar1">
				{{titleText}}
			</div>
			<!--购物车-->
			<router-link tag="li" :to="{ path: '/search' }" active-class="active"  class="iconCorol" :class="{blackFont:blackFont}">
				<div class="mar_8" v-show="classView"><icon type="search" class='iconcolor'></icon>寻找宝贝</div>

			</router-link>
			<div class="mar_test" v-show="classShow">
				<input  
				v-focus 
				class="search" 
				v-model="listval" 			
				v-show="searchShow1" 
				@click="textval"/>
				{{titleText}}
			</div>
			<span  class="blackFont" v-show="searchShow1">
				搜索
			</span>
			<router-link 
				v-show="messageShow"
				tag="li" 
				:to="{ path: '/message' }" 
				active-class="active"  
				class="iconCorol" 
				:class="{blackFont:blackFont}">
					消息
			</router-link>
		</div>
	</div>
</template>

<script>
import { Icon } from 'vux'
export default {
  name: 'header',
  props: ['classShow','classView','titleText','searchShow','classcar'],
  data(){
      return{
      	viewicon:true,
      	backicon:false,
      	classcar1:false,
      	headColor1:this.classView,
      	headColor2:this.classShow,
      	blackFont:this.classShow,
      	searchShow1:false,
      	messageShow:true,
      	manage:false,
      	listval:'输入搜索宝贝'
      }
  },
mounted(){ 
this.searchShow1=this.searchShow
this.messageShow=!this.searchShow
},
 components: {
 		Icon
  },
  directives: {
  focus: {
    // 指令的定义
    inserted: function (el) {
//  console.log(el)
      el.focus()
    }
  }
},
  watch: {
	 	listval(val){
		this.$emit('val', { title: this.listval })
  	}
  },
  methods:{
  	back(){
  		this.$router.back()
  	},
  	manage1(){
  		this.$emit('manage',{val:!this.manage})
//		alert(2222)
  	},
  	textval(){		
  		this.listval=''
  	}

  }
   
}
</script>

<style scoped>
	.search{
		border: 1px gainsboro solid;
		width: 4.5rem;
		height: 0.4rem;
		border-radius: 0.5rem;
		color: grey;
		padding-left: 0.1rem;
		/*background:#c89bf1 ;*/
	}
	li {
  list-style-type: none;
  padding: 0;
  
}
.iconcolor{
	color: white;
}
	.headerbox{
		width: 7rem;
		height: 0.7rem;
		margin: 0.15rem 0.2rem;
		/*background: darkgray;*/
	}
.header{
	width: 7.5rem;
	height: 0.98rem;

	position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 998;
}
.header-per{

	background: #c89bf1;

}
.header-gay{
border-bottom: 1px solid gainsboro;
	background: white;

}
.iconCorol{
	display: inline-block;
	/*margin-left: 0.16rem;*/
	color:white;
	/*line-height:0.2rem;*/
}
.mar_8{
	display: inline-block;
	margin:0 0.23rem;
	    width: 5rem;
	    color: white;
	    height: 0.5rem;
	    /*background: white;*/
	    border-bottom: solid 1px white;
}
.mar_test{
		display: inline-block;
	margin:0 0.05rem;
	    width: 5rem;
	    color: gray;
	    height: 0.5rem;
	    text-align: center;
	    line-height: 0.7rem;
	    /*background: white;*/
	    /*border-bottom: solid 1px white;*/
}
.mar_test1{
		display: inline-block;
	margin:0 0.05rem;
	    width: 5rem;
	    color: white;
	    height: 0.5rem;
	    text-align: center;
	    line-height: 0.7rem;
	    /*background: white;*/
	    /*border-bottom: solid 1px white;*/
}
.blackFont{
	color: gray;
}
</style>