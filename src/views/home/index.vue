<template>
 <!-- 设置外层边框 -->
 <el-container>
   <!-- 先左右布局，侧边栏容器 -->
   <!-- 左侧 -->
   <el-aside style = 'background-color:#353b4e; min-height:100vh; width:230px'>
     <!-- <zuocedaohang>放置了一个左侧组件 -->
       <layout-header></layout-header>
   </el-aside>
   <!-- 右侧再放置一个container因为右侧有是一个整体 -->
   <!-- 右侧 -->
   <el-container>
     <!-- 上下布局 -->
     <el-header>
       <!-- 头部 -->
       <layout-aside></layout-aside>
     </el-header>
     <el-main style="padding:0">
       <router-view></router-view>
     </el-main>
   </el-container>
 </el-container>
</template>
<script>
export default {

}
</script>
<style >

</style>
