<template>
  <div style="width:100%;height:300px;background:red">
    组件a页面
    <span>数量:</span><span>{{count1}}</span>
  </div>
</template>

<script>
export default {

data(){
    return{

    }
},
computed:{
    count1(){
        return this.$store.state.num
    }
}
}
</script>

<style>

</style>