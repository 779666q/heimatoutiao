<template>
 <!-- 设置外层边框 -->
 <el-container>
   <!-- 先左右布局，侧边栏容器 -->
   <!-- 左侧 -->
   <el-aside style = 'background-color:#353b4e; height:100vh; width:230px'>
     <!-- <zuocedaohang>放置了一个左侧组件 -->
     <zuocedaohang></zuocedaohang>
   </el-aside>
   <!-- 右侧再放置一个container因为右侧有是一个整体 -->
   <!-- 右侧 -->
   <el-container>
     <!-- 上下布局 -->
     <el-header>
       <!-- 头部 -->
     </el-header>
     <el-main>
      <!-- 主要区域 -->
     </el-main>
   </el-container>
 </el-container>
</template>

<script>
// 把左边导航引进来
import daohang from '../../components/home/zuocedaohang'
export default {
  components: {
    'zuocedaohang': daohang
  }
}
</script>
<style >

</style>
