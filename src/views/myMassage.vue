<template>
	<div id="myMassage">
		我是g
		
		<i class="icon iconfont-ali" :class="{ active: isActive }">&#xe6a5;</i>
		
		<div><i class="icon iconfont-ali icon-ail-yuanxingweixuanzhong" ></i></div>
	</div>
</template>

<script>
export default {
//name: 'myMassage',
  data () {
      return {
     	isActive:false
      }
    }
   
}
</script>

<style>
	.active{
		color: red;
	}
	/*.aa1{height: 500px;width: 500px;border: solid 1px blue;margin: 0 auto;}*/
</style>