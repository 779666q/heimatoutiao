<template>
<!-- </el-menu>为导航组件 -->
  <div class="zujian">
      <div class="title">
          <img src="../../assets/img/logo_admin.png" alt="">
      </div>
      <el-menu style = 'width:231px' background-color="#353b4e" text-color="#adafb5">
        <el-menu-item>
            首页
        </el-menu-item>
        <!-- 给个二级导航 -->
        <el-submenu>
            <!-- 用具名插槽给他插上 -->
            <span slot='title'>内容管理</span>
             <el-menu-item>
                发布文章
             </el-menu-item>
              <el-menu-item>
                内容列表
             </el-menu-item>
              <el-menu-item>
                评论列表
             </el-menu-item>
              <el-menu-item>
                素材管理
             </el-menu-item>
        </el-submenu>
         <el-submenu>
            <span slot='title'>粉丝列表</span>
             <el-menu-item>
                图文数据
             </el-menu-item>
              <el-menu-item>
                粉丝概况
             </el-menu-item>
              <el-menu-item>
                粉丝列表
             </el-menu-item>
              <el-menu-item>
                粉丝画像
             </el-menu-item>
        </el-submenu>
        <el-menu-item>
            用户信息
        </el-menu-item>
      </el-menu>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.zujian{
    width:230px;
    .title{
        text-align: center;
        background-color: #2e2f32;
        padding: 10px  0;
        img {
            height:35px;
    }
    }

}
</style>
