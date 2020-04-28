<template>
	<div>
		 <myHeader :classShow='true' :classView='false' titleText='登录'></myHeader>
		<div class="bgbox">
			<div class="smallbox">
				<h4>账号</h4>
				<div class="inputtext">
					<input type="text" style="width: 6.8rem;" class="input" value="用户名/手机"/>
				</div>
				<h4>密码</h4>
				<div class="inputtext">
					<input type="password" style="width: 6.8rem;" class="input" value=""/>
				</div>
				<div class="button">登录</div>
				<h4 class="forget">忘记密码</h4>
				<div class="inputtext or">
					or
				</div>
				<div class="inputtext noline">
					 <grid :show-lr-borders="false" :show-vertical-dividers="false">
				      <grid-item link="" >
				        <!--<img slot="icon" src="">-->
				        	<span class="grid-center">微信</span>
				      </grid-item>
				      <grid-item link="" >
				        <!--<img slot="icon" src="">-->
				        	<span class="grid-center">QQ</span>
				      </grid-item>
				      <grid-item link="" >
				        <!--<img slot="icon" src="">-->
				        	<span class="grid-center">新浪</span>
				      </grid-item>
				    </grid>
					<!--<span>微信</span><span>QQ</span><span>新浪</span>-->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
	import { Grid, GridItem, GroupTitle } from 'vux'
	import myHeader from './header'
	export default {
  name: 'login',
  components: {
    Grid,
    GridItem,
    GroupTitle,
    myHeader
  },
   data () {
      return {
     	login:''
      }
    }
   
}
</script>

<style scoped>
	.bgbox{

		width: 6.8rem;
		height: 10rem;
		margin: 0 0.4rem;
		padding: 0.01rem;
	}
	.smallbox{
		margin-top: 2rem;
		width: 6.8rem;
		height: 5rem;

	}
	h4{
		text-align: center;
		color: #c89bf1;
		margin-top: 0.5rem;
	}
	.inputtext{
		width: 6.8rem;
		height: 0.8rem;		
		border-bottom:solid 1px gainsboro;
		margin-bottom: 0.5rem;
	}
	.input{
		border: none;
		height: 0.8rem;
		color: darkgray;
	}
	.button{
		width: 6.8rem;
		height: 0.8rem;	
		background: #c89bf1;
		color: white;
		text-align: center;
		line-height: 0.8rem;
		border-radius: 5rem;
	}
	.forget{
		color: darkgray;
		font-size: 0.28rem;
	}
	.or{
		text-align: center;
		height: 0.3rem;	
		color: darkgray;
	}
	.noline{
		border: none;
	}
	.grid-center {
  display: block;
  text-align: center;
  color: #666;
}
</style>