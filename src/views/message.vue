<template>
	<div>
		<div style="height: 1rem;"></div>
		<div class="fenge"></div>
		<div class="iconbg">
			<div class="iconbox">
	      		<div class="icontext" ><div class="li"></div >物流</div>	
	      		<div class="icontext" ><div class="li"></div >通知</div>	
	      		<div class="icontext" ><div class="li"></div >互动</div>	
	      		<!--<div class="icontext" ><div class="li"></div >推荐</div>-->	
	      	</div>
	     </div>
	     <div class="fenge"></div>
	       <panel :header="('今日消息')" :footer="footer" :list="list" :type="type" @on-img-error="onImgError"></panel>
	</div>
</template>

<script>
	import { Panel} from 'vux'
export default {
  name:'message',
  components: {
    Panel
  },
  methods: {
    onImgError (item, $event) {
      console.log(item, $event)
    }
  },
  data () {
    return {
      type: '1',
      list: [{
        src: 'http://somedomain.somdomain/x.jpg',
        fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/component/cell'
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题二',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: {
          path: '/component/radio',
          replace: false
        }        
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题二',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: {
          path: '/component/radio',
          replace: false
        }        
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题二',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: {
          path: '/component/radio',
          replace: false
        }        
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题二',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: {
          path: '/component/radio',
          replace: false
        }        
      }
      
      ],
      footer: {
//      title: this.$t('more'),
        url: 'http://vux.li'
      }
    }
  }
}
</script>

<style scoped>
	.fenge{
	/*margin-top: 1rem;*/
	width: 7.5rem;
	height: 0.08rem;
	background: gainsboro;
}
.iconbg{
	/*margin-top: 1rem;*/
	width: 7.5rem;
	height: 2.1rem;
	background: white;
}
.icontext{
		display: inline-block;
		color: #191818;
	font-size: 0.24rem;
	    width: 1.2rem;
    text-align: center;
    margin: 0 0.5rem;
	}
.iconbox{
		width: 7.1rem;
		margin: 0.4rem 0.2rem;
		display: inline-block;
	}
	.li{
	
	float: left;
	border: 1px solid gray;
	width: 1rem;
	height: 1rem;
	border-radius:1rem ;
	text-align: center;
	line-height: 1rem;
	/*margin:0 0.5rem;*/
	margin-left: 0.1rem;
	color:#ffbe00;
	/*margin-top: rem;*/
}

</style>