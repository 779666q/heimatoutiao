<template>
  <!-- 最头部那个组件 -->
  <el-row type="flex" justify="space-between" align="middle" class="header">
      <!-- 两列 -->
      <!-- 左侧 -->
      <el-col :span="6" class='left'>
        <!-- 左侧图标 -->
        <i class= 'el-icon-s-unfold'></i>
        <span class="title">江苏传智播客教育科技股份有限公司</span>
      </el-col>
      <!-- 右侧 -->
      <!-- //col列里面嵌套了一个row行,align="middle"剧中的意思 -->
      <el-col :span="4" class="right">
        <el-row type="flex" justify="end" align="middle">
           <img src="" alt="">
          <!-- 下拉菜单 -->
          <el-dropdown>
              <span>我最牛逼</span>
              <!-- <el-dropdown-menu>具名插槽 -->
              <el-dropdown-menu slot="dropdown">
                <!-- 下拉内容 -->
                  <el-dropdown-item>个人信息</el-dropdown-item>
                  <el-dropdown-item>git地址</el-dropdown-item>
                  <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
          </el-dropdown>
        </el-row>
      </el-col>
  </el-row>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
  .header {
    height:60px;
    .left {
      font-size: 15px;
      .title{
        margin-left: 5px;
        color:#2c3e50;
      }
    }
    .right{

    }
  }
</style>
