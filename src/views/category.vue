<template>
  <div>
  	
    <!--<group :title="('Switch the type')">
      <radio title="type" v-model="type" :options="['1', '2', '3', '4', '5']"></radio>
    </group>
    <panel :header="('List of content with image')" :footer="footer" :list="list" :type="type" @on-img-error="onImgError"></panel>-->
    <div style="height: 1rem;"></div>
  	<div class="iconbg">
			<div class="iconbox">
	      		<div class="icontext" ><div class="title fadeInUp animated li"></div >特卖</div>	
	      		<div class="icontext" ><div class="title fadeInUp animated li"></div >上新</div>	
	      		<div class="icontext" ><div class="title fadeInUp animated li"></div >爆款</div>	
	      		<div class="icontext" ><div class="title fadeInUp animated li"></div >推荐</div>	
	      </div>	
		</div>
		<div class="fenge"></div>
  </div>
</template>

<i18n>
Switch the type:
  zh-CN: 切换样式
List of content with image:
  zh-CN: 图文组合列表
More:
  zh-CN: 查看更多
</i18n>

<script>
import { Panel, Group, Radio } from 'vux'

export default {
  components: {
    Panel,
    Group,
    Radio
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
        },
        meta: {
          source: '来源信息',
          date: '时间',
          other: '其他信息'
        }
      }],
      footer: {
        title: ('more'),
        url: 'http://vux.li'
      }
    }
  }
}
</script>

<style scoped="scoped">
.iconbg{
	/*margin-top: 1rem;*/
	width: 7.5rem;
	height: 2.1rem;
	background: white;
}

.li{
	
	float: left;
	border: 1px solid gray;
	width: 1rem;
	height: 1rem;
	border-radius:1rem ;
	text-align: center;
	line-height: 1rem;
	/*margin: 0.5rem 0.4rem  0 0.4rem;*/
	margin-left: 0.1rem;
	color:#ffbe00;
	/*margin-top: rem;*/
}
.iconbg{
	/*margin-top: 1rem;*/
	width: 7.5rem;
	height: 2.1rem;
	background: white;
}
.fenge{
	/*margin-top: 1rem;*/
	width: 7.5rem;
	height: 0.08rem;
	background: gainsboro;
}
.iconbox{
		width: 7.1rem;
		margin: 0.4rem  0.2rem;
		display: inline-block;
	}
	.icontext{
		display: inline-block;
		color: #191818;
	font-size: 0.24rem;
	    width: 1.2rem;
    text-align: center;
    margin: 0 0.24rem;
	}
	.text-scroll {
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
}
.text-scroll p{
  font-size: 12px;
  text-align: center;
  line-height: 0.6rem;
  color: #191818;
}
.title{
  line-height: 2rem;
  text-align: center;
  color: #fff;
}
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
.vux-indicator.custom-bottom {
  bottom: 30px;
}
@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
.fadeInUp {
  animation-name: fadeInUp;
}
</style>