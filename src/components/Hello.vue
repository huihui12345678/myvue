<template>
<div class="hello">
   
    <router-link v-for="(item,index) in $router.options.routes[0].children" tag="li"  :to="item.path" active-class="active" :key="item.path">{{item.name}}</router-link>		
  	 <transition name="slide">
  	<!--<router-view></router-view>-->
  	 </transition>
</div>
   
</template>
 
<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '坑死人了。'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.active{color: palevioletred;background-color: gainsboro;}
.hello li{}
</style>
