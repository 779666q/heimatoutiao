<template>
  <!-- 这里面就是我的面包屑的内容 -->
  <!-- separator=""这个是面包屑分割的意思就是给什么标志 -->
<el-breadcrumb separator=">">
<el-breadcrumbitem to='/home'>首页</el-breadcrumbitem>
<el-breadcrumbitem>
    <!-- 定义一个具名插槽 -->
    <slot name='title'></slot>
</el-breadcrumbitem>
</el-breadcrumb>
</template>

<script>
export default {

}
</script>

<style>

</style>
