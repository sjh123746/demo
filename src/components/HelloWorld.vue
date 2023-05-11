<template>
  <div class="Menu" style="height:100%">
    <el-container>
  <el-header>{{msg}}</el-header>
  <el-container style="border: 1px solid #eee">
    <el-aside width="200px" >
    <el-menu :default-openeds="['1', '3']" style="height: 100vh"  router>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item index="/demo">选项1</el-menu-item>
          <el-menu-item index="/about">选项2</el-menu-item>
          <el-menu-item index="/other">选项3</el-menu-item>
        </el-submenu>
     
      
    </el-menu>
  </el-aside>
  
    <el-main>
      <keep-alive include="demo">
      <router-view></router-view>
      </keep-alive>
    </el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    
  }
  
  .el-aside {
    background-color: #B3C0D1 ;
    color: #333;
    text-align: center;
  
    /* display: block;

    position: relative;
    overflow-y: scroll; */

  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  

</style>
