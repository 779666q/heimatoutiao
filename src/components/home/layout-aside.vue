<template>
  <!-- 最头部那个组件 -->
  <el-row type="flex" justify="space-between" align="middle" class="header">
    <!-- 两列 -->
    <!-- 左侧 -->
    <el-col :span="6" class="left">
      <!-- 左侧图标 -->
      <i class="el-icon-s-unfold"></i>
      <span class="title">江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <!-- 右侧 -->
    <!-- //col列里面嵌套了一个row行,align="middle"剧中的意思 -->
    <el-col :span="4" class="right">
      <el-row type="flex" justify="end" align="middle">
        <img src alt />
        <!-- 下拉菜单 -->
        <el-dropdown  @command="handle">
          <span>我最牛逼</span>
          <!-- <el-dropdown-menu>具名插槽 -->
          <el-dropdown-menu slot="dropdown" >
            <!-- 下拉内容 -->
            <el-dropdown-item command='info'>个人信息</el-dropdown-item>
            <el-dropdown-item command="git">git地址</el-dropdown-item>
            <el-dropdown-item command="lgout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      useInfo: {} // 这里面是用户信息
      // deafaultIng: require('../../assets/img/header.jpg')
    }
  },
  created () {
    let token = window.localStorage.getItem('user-token') // 这一步是获取令牌
    // 这里面是查询数据
    this.$axios({
      url: '/user/profile',
      headers: {
        Authorization: `Bearer ${token}` // 这个不是引号，是模板字符串
      }
    }).then(result => {
      this.userInfo = result.data.data // 获取个人信息
    })
  },
  methods: {
    handle (commad) {
      if (commad === 'lgout') {
        console.log(commad)
        // 完全等于他时就会退出
        // 首先需要把令牌删除
        window.localStorage.removeItem('user-token')
        // 拿到我的实力对象，然后返回登录页
        this.$router.push('/login')
      } else if (commad === 'git') {
        window.location.href = 'https://github.com/779666q/heimatoutiao'
      }
    }
  }
}
</script>

<style lang='less' scoped>
.header {
  height: 60px;
  .left {
    font-size: 15px;
    .title {
      margin-left: 5px;
      color: #2c3e50;
    }
  }
}
</style>
