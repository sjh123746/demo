<template>
  <div>
    about页面
    
<input ><br>
<button @click="page='pageA'">a</button><button @click="page='pageB'">b</button>
<component :is="page"></component>
<button @click="increase()">+</button><button @click="down()">-</button>
<div>{{ count }}/{{ num }}</div>
  </div>
</template>

<script>
import pageA from './a.vue'
import pageB from './b.vue'
export default {
  name:'about',
  components:{
pageA,
pageB
  },
  data(){
    return{
      page:pageA,
      count:1,

    }
  },
  computed:{
num(){
  return this.$store.state.num
}
  },
  methods:{
increase(){
  this.count++
  this.$store.commit('add')
},
down(){
  this.count--
}  }

}
</script>

<style>

</style>
