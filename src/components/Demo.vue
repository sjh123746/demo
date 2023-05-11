<template>
  <div>demo页面
    <input v-focus>
    <input>
    <el-button v-debounceClick="debounce" delay-time:20000>点击</el-button>
    <div>
      <span>名字</span>
    <div>{{ name }}</div>
  </div>
    
    <div>vuex{{ this.$store.state.num }}</div>
  </div>
</template>

<script>
import mixin from '@/mixins/mixins.vue' // 引入mixin文件

export default {
  name: 'demo',
  mixins: [mixin],
  data () {
    return {
      name:"hhh"
     
      
    }
  },
  created(){
console.log(this.name)
  },
  directives: { focus: {
    // 指令的定义
    inserted: function (el) {
      el.focus()
    }
  }
   },
   methods:{
    debounce(){
      console.log('123')
    }
   }
}
</script>

<style>

</style>