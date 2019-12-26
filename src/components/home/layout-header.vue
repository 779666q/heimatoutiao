<template>
  <!-- </el-menu>为导航组件 -->
  <div class="zujian">
    <div class="title">
      <img src="../../assets/img/logo_admin.png" alt />
    </div>
    <!-- router,开启路由 -->
    <el-menu router style="width:231px" background-color="#353b4e" text-color="#adafb5">
      <el-menu-item index="/home">首页</el-menu-item>
      <!-- 给个二级导航 -->
      <el-submenu index='1'>
        <!-- 用具名插槽给他插上 -->
        <span slot="title">内容管理</span>
        <el-menu-item index="/home/publish">发布文章</el-menu-item>
        <el-menu-item index="/home/articles">内容列表</el-menu-item>
        <el-menu-item index="/home/comment">评论列表</el-menu-item>
        <el-menu-item index="/home/material">素材管理</el-menu-item>
      </el-submenu>
      <el-submenu index='2'>
        <span slot="title">粉丝列表</span>
        <el-menu-item index="/home/picture">图文数据</el-menu-item>
        <el-menu-item index="/home/fansinfo">粉丝概况</el-menu-item>
        <el-menu-item index="/home/fanslife">粉丝列表</el-menu-item>
        <el-menu-item index="/home/fanlist">粉丝画像</el-menu-item>
      </el-submenu>
      <el-menu-item>用户信息</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.zujian {
  width: 230px;
  .title {
    text-align: center;
    background-color: #2e2f32;
    padding: 10px 0;
    img {
      height: 35px;
    }
  }
}
</style>
