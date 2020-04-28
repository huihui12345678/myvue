<template>
	<div>
		<myHeader :classShow='false' :classView='true'></myHeader>
		<!--<h1>我是11111111111</h1>
		<span>我叫:</span><input type="text" v-model="myname"/>
		<span>我是:</span><input type="text" v-model="Iam"/>
		<input type="button"value="确定" @click="sure"/>-->
		<div class="bgimg">
			<!--<router-link :to="{ path: 'shoplist' }">-->
				<swiper loop auto :list="demo07_list" :index="demo07_index" @on-index-change="demo07_onIndexChange" height='3.6rem'></swiper>
			<!--</router-link>-->
		</div>
		<div class="fenge"></div>
		<div class="iconbg">
			<div class="iconbox">
	      		<div class="icontext" >
	      			<router-link :to="{ path: 'shoplist' }">
		      			<div class="title fadeInUp animated " >
		      				<img src="../assets/img/171218_38g60flle3ijih0hk78g6i07e6eg4_225x225.gif" class="li"/>
		      			</div >
		      			特卖
	      			</router-link>
	      		</div>	
	      		<div class="icontext" >
	      			<router-link :to="{ path: 'shoplist' }">
		      			<div class="title fadeInUp animated">
		      				<img src="../assets/img/180403_27ii7j7di688010a5h458idj8h3jk_250x250.gif" class="li"/>
		      			</div >
		      				上新
	      			</router-link>
	      		</div>	
	      		<div class="icontext" >
	      			<router-link :to="{ path: 'shoplist' }">
		      			<div class="title fadeInUp animated">
		      				<img src="../assets/img/180105_5b03id78bg985518e232f9h0hc90f_250x250.gif" class="li"/>
		      			</div >
		      				爆款
	      			</router-link>
	      		</div>	
	      		<div class="icontext" >
	      			<router-link :to="{ path: 'shoplist' }">
		      			<div class="title fadeInUp animated">
		      				<img src="../assets/img/180324_4i4bccdih87lb07lih2i546j8hej3_180x180.gif" class="li"/>
		      			</div >
		      			推荐
	      			</router-link>
	      		</div>	
	      </div>	
		</div>
		<div class="fenge"></div>
		<div style="height: 0.8rem;">
			<swiper auto height='33px' direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
		      <swiper-item><p>义务爱了 完成传奇世界H5-王者归来任务 获得20金币</p></swiper-item>
		      <swiper-item><p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p></swiper-item>
		      <swiper-item><p>零哥章魚 完成传奇世界H5-王者归来任务 获得30金币</p></swiper-item>
		      <swiper-item><p>做迎而為 兑换【饿了么】畅享美食红包 消耗20金币</p></swiper-item>
		      <swiper-item><p>只知道不知道 兑换【饿了么】畅享美食红包 消耗20金币</p></swiper-item>
		      <swiper-item><p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p></swiper-item>
		    </swiper>
		<!--<swiper loop auto :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange" height='3.6rem'></swiper>-->
		</div>
		<div class="fenge" style=""></div>
		<div class="iconbg2">
		<div style="margin-left: 0.2rem;">正在流行</div>	
		<swiper  height='4rem'>
	      <swiper-item class="black">
	      	
	      	<div class="iconbox">
	      		<div class="icontext" v-for="re in icons"><div class="title fadeInUp animated">
	      			<img :src="re.img" class="li"/>
	      		</div >{{re.tltie}}</div>		    
	      	</div>	 
	      
	      </swiper-item>
	      <swiper-item class="black">
	      	<div class="iconbox">
	      		<div class="icontext" v-for="re in icons"><div class="title fadeInUp animated">
	      			<img :src="re.img" class="li"/>
	      		</div >{{re.tltie}}</div>
	      	</div>
	      </swiper-item>
	      <swiper-item class="black">
	      	<div class="iconbox">
	      		<div class="icontext" v-for="re in icons" ><div class="title fadeInUp animated li"></div >{{re.tltie}}</div>	
	      	</div>
	      </swiper-item>
	      <!--<swiper-item class="black"><h2 class="title fadeInUp animated">不是它可恶</h2></swiper-item>
	      <swiper-item class="black"><h2 class="title fadeInUp animated">而是它不懂你</h2></swiper-item>
	      <swiper-item class="black"><h2 class="title fadeInUp animated">我们试图</h2></swiper-item>
	      <swiper-item class="black"><h2 class="title fadeInUp animated">做些改变</h2></swiper-item>-->
	    </swiper>
		</div>
		<img src=""/>

		<div class="fenge"></div>
		<div class="liuimg iconbg">
			<div style="margin-left: 0.2rem;">流行单品</div>
		  <div class="shopicon">
		  	<a v-for="data in imgbg" >
		  		<div class="imgshop">
		  			<img :src="data.img"/>
		  			<div>{{data.tltie.substring(0,15)+'...'}}</div>
		  			<div style="text-align: center;color: red;">{{data.price}}元</div>
		  		</div>		  		
		  	</a>
		  </div>
		</div>
	</div>
</template>
<script>
	import myHeader from '@/components/header'
import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux'
const baseList = [{
  url: 'javascript:',
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/5.jpg', // 404
  title: '送你一次旅行',
  fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
}]

const imgList = [
'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
]

const urlList = baseList.map((item, index) => ({
  url: 'http://m.baidu.com',
  img: item.img,
  fallbackImg: item.fallbackImg,
  title: `(可点击)${item.title}`
}))

const demoList = imgList.map((one, index) => ({
  url: 'javascript:',
  img: one
}))

const only2ClickList = baseList.slice(0, 2).map(item => {
  item.url = 'http://m.baidu.com'
  return item
})

	export default{
		name:'home',
		data(){
			return{
				
				myname:"",
				Iam:"",
				  demo01_list: baseList,
			      demo02_list: demoList,
			      demo03_list: demoList,
			      demo04_list: imgList,
			      demo05_list: [],
			      demo06_list: urlList,
			      demo07_list: only2ClickList,
			      demo01_index: 0,
			      demo02_index: 1,
			      demo05_index: 0,
			      demo06_index: 0,
			      demo07_index: 0,
			      swiperItemIndex: 1,
			      icons:[
			      	{
			      		tltie:'少女短裙',			      		
			      		img:require('../assets/img/180409_2cii9gddah6dj5347e9457818kcc0_265x331.jpg_200x9999.v1c7E.70.jpg')		      					      		
			      	},
			      	{
			      		tltie:'时尚女鞋',
			      		img:require('../assets/img/180417_0h4l938cjecchd0j5b3dgljfedc62_180x180.gif')
			      	},
			      	{
			      		tltie:'显瘦裙装',
			      		img:require('../assets/img/180205_1iegjfjc1el0kdkk349j4k8d86kac_265x331.jpg_200x9999.v1c7E.70.jpg')			      	
			      	},
			      	{
			      		tltie:'枪手衬衫',
			      		img:require('../assets/img/RU3VL}0}`_NPF{4X(0W1OEJ.png')	
			      	},
			      	{
			      		tltie:'春款套装',
			      		img:require('../assets/img/180327_0l6ed45kcl3f0ha6c53b9dagk86l5_265x331.jpg_200x9999.v1c7E.70.jpg')	
			      	},
			      	{
			      		tltie:'美妆速递',
			      		img:require('../assets/img/180326_0dlh28fh00agk0ki4c1k9be4ibkje_265x331.jpg_200x9999.v1c7E.70.jpg')	
			      	},
			      	{
			      		tltie:'百搭t恤',
			      		img:require('../assets/img/180410_56d82a4e336j6gdag3544fjja01fb_640x960.jpg_320x999.webp')	
			      	},
			      	{
			      		tltie:'气质包包 ',
			      		img:require('../assets/img/180409_360hfkdkkf078bjj20ca153ba64ai_265x331.jpg_200x9999.v1c7E.70.jpg')	
			      	}
			      ],
			       imgbg:[
			      	{
			      		tltie:'【两件50元】2019夏装新款韩版潮牌BF学院风情侣装卡通印花宽松港风短袖T恤女打底衫上衣',			      		
			      		img:require('../assets/img/180409_2cii9gddah6dj5347e9457818kcc0_265x331.jpg_200x9999.v1c7E.70.jpg'),
			      		price:29.00
			      		
			      	},
			      	{
			      		tltie:'【两件100元】2010夏装新款韩版潮牌BF学院风情侣装卡通印花宽松港风短袖T恤女打底衫上衣',
			      		img:require('../assets/img/180409_8gfjb12c4f2g31h07i1ej26h52i0f_265x331.jpg_200x9999.v1c7E.70.jpg'),
			      		price:26.00
			      	},
			      	{
			      		tltie:'【两件90元】2018夏装新款韩版潮牌BF学院风情侣装卡通印花宽松港风短袖T恤女打底衫上衣',
			      		img:require('../assets/img/180417_71cadfjfk855lae23l0be28h7khh6_640x900.jpg_400x9999.v1c7E.70.webp'),
			      		price:27.00
			      	},
			      	{
			      		tltie:'【两件80元】2014夏装新款韩版潮牌BF学院风情侣装卡通印花宽松港风短袖T恤女打底衫上衣',
			      		img:require('../assets/img/RU3VL}0}`_NPF{4X(0W1OEJ.png'),
			      		price:25.00
			      	},
			      	{
			      		tltie:'【两件70元】2016夏装新款韩版潮牌BF学院风情侣装卡通印花宽松港风短袖T恤女打底衫上衣',
			      		img:require('../assets/img/180327_0l6ed45kcl3f0ha6c53b9dagk86l5_265x331.jpg_200x9999.v1c7E.70.jpg'),
			      		price:259.00
			      	},
			      	{
			      		tltie:'【两件40元】2017夏装新款韩版潮牌BF学院风情侣装卡通印花宽松港风短袖T恤女打底衫上衣',
			      		img:require('../assets/img/180326_0dlh28fh00agk0ki4c1k9be4ibkje_265x331.jpg_200x9999.v1c7E.70.jpg'),
			      		price:249.00
			      	},
			      	{
			      		tltie:'【两件20元】2012夏装新款韩版潮牌BF学院风情侣装卡通印花宽松港风短袖T恤女打底衫上衣',
			      		img:require('../assets/img/180410_56d82a4e336j6gdag3544fjja01fb_640x960.jpg_320x999.webp'),
			      		price:219.00
			      	},
			      	{
			      		tltie:'【两件10元】2011夏装新款韩版潮牌BF学院风情侣装卡通印花宽松港风短袖T恤女打底衫上衣',
			      		img:require('../assets/img/180409_360hfkdkkf078bjj20ca153ba64ai_265x331.jpg_200x9999.v1c7E.70.jpg'),
			      		price:296.00
			      	}
			      ]
			}
		},
		computed: {

  	},
  	mounted(){

  	},
		methods:{
//			sure:function(){
//				var param={name:this.myname,Iam:this.Iam}
//				Util.setLocalStorage('users',param)
//			}
			demo06_onIndexChange (index) {
		      this.demo06_index = index
		    },
			demo07_onIndexChange (index) {
		      this.demo07_index = index
		    }
	},
	components: {
        Swiper,
	    SwiperItem,
	    GroupTitle,
	    XButton,
	    Divider,
	    myHeader
  }
	}
</script>

<style scoped="scoped">
	.imgshop{
		width: 3.2rem;
	    background: papayawhip;
	    display: inline-block;
	    height: 3.2rem;
	}
	.shopicon{
		width: 7.1rem;
		margin: 0.1rem  0.2rem;
		padding: 0rem 0.1rem 1rem;
	}
	.shopicon a{
		width: 3.2rem;
	    background: gainsboro;
	    display: inline-block;
	    height: 4rem;
	    margin: 0 0.1rem;
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
	.black {
  background-color: white;
  /*margin-right: 0.2rem;*/
}
.bgimg{
	/*margin-top: 1rem;*/
	width: 7.5rem;
	height: 3.6rem;
	background: white;
}
.iconbg{
	/*margin-top: 1rem;*/
	width: 7.5rem;
	height: 2.1rem;
	background: white;
}
.iconbg2{
	/*margin-top: 1rem;*/
	width: 7.5rem;
	height: 4.5rem;
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

.fenge{
	/*margin-top: 1rem;*/
	width: 7.5rem;
	height: 0.08rem;
	background: gainsboro;
}
.xbgimg{
	/*margin-top: 1rem;*/
	width: 7.5rem;
	height: 3.6rem;
	/*height: 180px;*/
	background: white;
}
.liuimg{
	
	width: 7.5rem;
	height: 8rem;
	background: white;
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
.copyright {
  font-size: 12px;
  color: #ccc;
  text-align: center;
}
</style>