<template>
  <div class="login">
      <!-- 卡片 -->
      <el-card class="login-card">
         <div class="tupian">
          <img src="../../assets/img/logo_index.png" alt="">
        </div>
        <!-- 登录表单 -->
        <!-- 表单容器 -->
        <!-- rules属性绑定验证规则对象 -->
        <el-form style="margin-top:20px" :model="loginForm" :rules="loginreles" ref = 'myForm'>
            <!-- 表单域一行 -->
            <el-form-item prop="mobile">
                <!-- 再放入表单框 -->
                <el-input v-model="loginForm.mobile" placeholder="请输入电话号码"></el-input>
                <!-- 校验要配上prop后面是他的字段名，就是下面那个手机号码那个名 -->
                <!-- 用双向绑定再将它和下面的手机号绑定起来 -->
            </el-form-item>
            <!-- 再来一个表单域 -->
            <el-form-item prop="code" >
                <el-input v-model="loginForm.code" style="width:67%" placeholder="请输入验证码" ></el-input>
                <el-button style="float:right" type="primary" icon="el-icon-edit">发送验证码</el-button>
            </el-form-item>
            <!-- 还是一个表单域 -->
            <el-form-item prop="check">
                <el-checkbox  v-model="loginForm.check">
                    我已阅读并同意用户协议
                </el-checkbox>
            </el-form-item>
            <el-form-item>
              <!-- 在登录的时候注册一个点击事件 -->
                <el-button style="width:100%" type="primary" @click= "submitLogin">登录</el-button>
            </el-form-item>
        </el-form>]
      </el-card>
  </div>
</template>

<script>
export default {
// 第一步在data中定义表单数据
  data () {
    return {
      // 定义一个表单数据对象
      loginForm: {
        //   手机号
        mobile: '13911111111',
        // 验证码
        code: '246810',
        check: true
        // check意思就是小框是否勾选
      },
      loginreles: {
        //   验证规则，验证登录表单 key(就是字段名)value(就是数组){}就是一个对象一个对象就是一个规则他们规则就是校验第一个满足就会去校验第二个如果第二个不满足则不会再校验整个数组中所有对象都校验完了才算通过
        //  required: true 为必填的意思
        mobile: [{ required: true, message: '请输入图窗不可空' }, { pattern: /^1[3456789]\d{9}$/, message: '请重新输入手机号' }],
        code: [{ required: true, message: '请输入图窗不可空' }, { pattern: /^\d{6}$/, message: '输入不正确' }],
        check: [{ validator: function (rule, value, callback) {
          if (value) {
            // 为true时候放过去，继续执行
            // 如果我们想让他放过去就直接执行callback
            callback()
          } else {
            // 为flase时，出提示框
            callback(new Error('您需要点击同意才可进入'))
          }
        } }]
        // check是自定义函数他有三个参数第一个是rule，value，callback（value，指得就是要校验的值，此时要校验的值就是check就是那个小框）
      }
    }
  },
  methods: {
    // 提交登录的表单
    submitLogin () {
      // console.log(11)
      // 直接el-form获取到实例,此时的这个实例哟个方法.validate这个是方法要加（）
      this.$refs.myForm.validate((isok) => {
        // console.log(1)
        if (isok) {
          // 前端效验成功this.$axios()给个括号也行，也是个方法
          this.$axios({
            url: '/authorizations', // 请求个地址
            method: 'post',
            data: this.loginForm
            // 上面这行代码不明白
          }).then(result => {
            console.log(result.data.data.token)
            window.localStorage.setItem('user-token', result.data.data.token)// 这段话意思就是我的药匙，令牌，放在window里保存
            this.$router.push('/home')
            // 这个是成功以后就会进入到此
          }).catch(() => {
            // 这个是不成功就进入到此
            // 这个message提示信息是从element里来的
            this.$message({
              message: '你手机号不对！操！抓紧改！他妈了个巴子的！也有可能验证码不对昂。',
              type: 'warning'
            })
          })
        }
      })
    }
  }
}
</script>
// lang属性less语言
<style lang='less' scoped>
.login{
    background-image: url('../../assets/img/login_bg.jpg');
    background-size: cover;//自动适应
    height: 100vh;
    // 给父级元素水平居中
    display: flex;
    justify-content: center;
    // 水平居中
    align-items: center;
    // 父级居中gf
.login-card{
    width: 440px;
    height:350px;
.tupian{
    text-align: center;

}
}
}
</style>
