<template>
	<div>
		<myHeader :classShow='true' :classView='false' :searchShow='true' v-on:val="handleMessage"></myHeader>
		<div class="bgbox">
			<div class="conBox" v-for="res in newsList" v-show="listShow">{{res.title}}</div>
		</div>
	</div>
</template>

<script>
//	let datalist=null;
	import myHeader from './header'
	export default {
  name: 'search',
  components: {
    myHeader
  },
   data () {
      return {
     	login:'',
     	datalist:[],
     	listdata:'',
     	listShow: false
      }
   },
   computed:{
   	newsList(){
   	     let list =this.datalist.filter(user=> {
			return user.title.indexOf(this.listdata) !== -1
     	})
		return list
   	}

   },
   methods:{
   	searchList(){
   		this.$axios.get('../static/search.json').then(res=>{
   			this.dataArr=res.data
			this.datalist=res.data.data							
		});
   	},
   	handleMessage(data){
	this.listdata=data.title
	data.title?this.listShow=true:this.listShow=false;	
   	}
   },
   watch:{
   	
  	},
   created(){
   	this.searchList()
   },
   mounted(){

   }  
}
</script>

<style scoped>
		.bgbox{
		width: 6.8rem;
		/*height: 10rem;*/
		margin: 0 0.3rem;
		/*padding: 0.01rem;*/
		/*background: yellowgreen;*/
	}
	.conBox{
		padding: 0.15rem 0;
		border-bottom: 1px solid gainsboro;
	}
</style>