<template>
  <!-- 这里面就是我的面包屑的内容 -->
<bread-crumb>
<el-breadcrumb-item to='/home'>首页</el-breadcrumb-item>
<el-breadcrumb-item>
    <!-- 定义一个具名插槽 -->
    <slot name='title'><slot>
</el-breadcrumb-item>
</bread-crumb>
</template>

<script>
export default {

}
</script>

<style>

</style>
