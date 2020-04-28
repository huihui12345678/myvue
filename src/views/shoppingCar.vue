<template>
  <div>
  <myHeader style="background: #c89bf1;" titleText='购物车'   :classcar='true'></myHeader>
  	<div style="border-bottom: 1px solid gainsboro;">
  		 <div class="delet " v-on:manage="deletShow">删除</div>
  	</div>
    <div class="carbox" v-for="list in list">
    	<div style="border-bottom: 1px solid gainsboro;"><i class="icon iconfont-ali icon-ail-yuanxingweixuanzhong " ></i>xxx小店</div>

      		<!--<panel  :footer="footer" :list="list" :type="type" @on-img-error="onImgError"></panel>-->
      		<div class="panelheight" v-for="data in list.datachlid">
      			 
      			<!--<input type="checkbox"/>-->
      			
			  			<div class="panel">
			  				<i class="icon iconfont-ali icon-ail-yuanxingweixuanzhong ali" ></i> 
			  				<!--<div class="fenge1"></div>-->
			  				<div class="carimgbg">
			  					<img src="../assets/img/180326_0dlh28fh00agk0ki4c1k9be4ibkje_265x331.jpg_200x9999.v1c7E.70.jpg" class="carimgbg"/>
			  				</div>		  				
			  				<span class="dsc">{{data.dsc}}</span>
			  				<!--<i>{{ msg }}元</i>-->
			  				<div style="width: 3.5rem;display: inline-block;"></div>
			  				
			  				<span class="cut">-</span><!--<i style="width: 0.5rem; height: 0.5rem;border: 1px solid gainsboro;display: inline-block;"/>-->
			  				<input type="text" style="border: gainsboro;width: 0.5rem;color: gray;" value="122"/>
			  				<!--</i>-->
			  				<i class="cut">+</i>
			  				<span class="price">{{data.price }}元</span>
			  				<div class="fenge1"></div>
			  				
			  			</div> 

      		</div>
      		<div class="fenge1"></div>
      	   <div class="fenge"></div> 		      
    </div>
   
  </div>
</template>

<script>
 	import {CheckIcon,Panel } from 'vux'
 	import myHeader from '@/components/header'
 	export default {
 	data () {
    return {
      commonList: [ 'China', 'Japan', 'America' ],
      checklist001: [] ,
      labelPosition: '',
      demo1: false,
      msg: '10',
      data:'',
      type: '1',
      list: [{
        src: 'http://somedomain.somdomain/x.jpg',
        fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题一',
        datachlid:[
          {dsc:'11111111111',price:123},
          {dsc:'11111111111',price:123},
          {dsc:'11111111111',price:12},
          {dsc:'11111111111',price:20},
          {dsc:'11111111111',price:68}
        ],
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/component/cell'
      }, 
      {
        src: 'http://somedomain.somdomain/x.jpg',
        fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题一',
        datachlid:[
           {dsc:'11111111111',price:123},
          {dsc:'11111111111',price:123},
          {dsc:'11111111111',price:12},
          {dsc:'11111111111',price:20},
          {dsc:'11111111111',price:68}
        ],
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/component/cell'
      },
      {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题二',
        datachlid:[
           {dsc:'11111111111',price:123},
          {dsc:'11111111111',price:123},
          {dsc:'11111111111',price:12},
          {dsc:'11111111111',price:20},
          {dsc:'11111111111',price:68}
        ],
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',       
        url: {
          path: '/component/radio',
          replace: false
        },
        meta: {
          source: '来源信息',
          date: '时间',
          other: '其他信息'
        }
      }]
    }
  },
  components: { 
    CheckIcon,
    Panel,
    myHeader
  },
  methods: {
    selectLeft () {
//  	this.demo1=!demo1
//    const left = _.without.apply(_, [this.commonList].concat(this.checklist001))
//    this.checklist001 = left
			console.log(this.msg)
    },
    change (val, label) {
//    console.log('change', val, label)
    },
    deletShow(data){
    	console.log(data)
    }
  },

}
</script>

<style scoped>
	.price{
		    position: absolute;
    left: 1.6rem;
    top: 0.6rem;
	}
	.delet{
		border: 1px solid brown;
		display: inline-block;
		padding: 2px 10px;
		color: brown;
		border-radius: 0.1rem;
		margin: 0.1rem 0.4rem;
	}
	.ali {
    position: relative;
    top: 0.2rem;

}
	.cut{
		color: red; 
		width: 0.4rem;
		height: 0.4rem; 
		border: 1px solid gainsboro;
		text-align: center;
		display: inline-block;
	}
	.fenge{
	/*margin-top: 1rem;*/
	width: 100%;
	height: 0.08rem;
	background: #f9f0f0;
}
	.fenge1{
	/*margin-top: 1rem;*/
	width: 100%;
	height: 0.2rem;
	/*background: gainsboro;*/
}
	.check{
		position: relative;
    top: -0.4rem
	}
	.panelheight{
		height: 1rem;
		position: relative;
		/*border-top:1px solid gainsboro ;
		border-bottom:1px solid gainsboro ;*/
		padding: 0.08rem 0;
	}
	.carbox{
		padding:0.3rem;
	}
	.panel{
		/*width: 6.1rem;*/
		height: 1rem;
		display: inline-block;
		position: relative;
		margin: 5px 0;

	}
	.dsc{
		text-align: right;
		position: absolute;
		top: 0;
		
	}
	.carimgbg{
		width: 1rem;
		height: 1rem;
		display: inline-block;
		/*background: yellowgreen;*/
		border-radius: 1rem;
		border: 1px solid gainsboro;
		/*background-position: 50px 50px;*/
		/*background-image: url(../assets/img/180226_29fj34kg0k1i14j9013k9hj1il9ik_265x331.jpg_200x9999.v1c7E.70.jpg);*/
	}
	/*h1{color: blueviolet;}*/
</style>