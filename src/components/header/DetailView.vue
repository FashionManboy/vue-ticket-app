<template>
  <div class="detail-wrapper">
    <div class="detail-item">
      <div class="detail-avatar">
        <i class="icon-circle-left" @click="$emit('update:show',false)"></i>
        <img class="image" src="http://static1.mtime.cn/html5/20180207160234/images/2014/logo_mtime.png" alt="">
      </div>

      <div class="login-wrap" v-show="showLogin">
        <h3>登录</h3>
        <p v-show="showTishi">{{tishi}}</p>
        <input type="text" placeholder="请输入用户名" v-model="username">
        <input type="password" placeholder="请输入密码" v-model="password">
        <button @click="login">登录</button>
        <span @click="ToRegister">没有账号?马上注册</span>
      </div>

      <div class="register-wrap" v-show="showRegister">
        <h3>注册</h3>
        <p v-show="showTishi">{{tishi}}</p>
        <input type="text" placeholder="请输入用户名" v-model="newUsername">
        <input type="password" placeholder="请输入密码" v-model="newPassword">
        <button @click="register">注册</button>
        <span @click="ToLogin">已有账号?马上登录</span>
      </div>

      <div class="detail-line">
        <div class="line"></div>
        <div class="text">使用第三方登录</div>
        <div class="line"></div>
      </div>
      <div class="detail-bottom">
        <img class="o_sina" src="http://static1.mtime.cn/html5/20180208104315/images/2014/o_sina.png" width="57"
             height="57">
        <img class="o_qq" src="http://static1.mtime.cn/html5/20180208104315/images/2014/o_qq.png" width="57"
             height="57">
      </div>
    </div>
  </div>
</template>

<script>
  import {setCookie, getCookie} from '../../assets/js/cookie'
  import {httpUrl} from "../../assets/js/http_url";

  export default {
    data() {
      return {
        showLogin: true,
        showRegister: false,
        showTishi: false,
        tishi: '',
        username: '',
        password: '',
        newUsername: '',
        newPassword: '',
        getUrl:''   //存数据接口
      }
    },
    mounted() {
//      页面挂截获取cookie 如果存在username的cookie则跳转到主页,不需要登录
      if (getCookie('username')) {
        this.$router.push('/view')
      }
    },
    methods: {
      changeWord() {
        this.$refs.password.type = 'text'
      },
      login() {
        if (this.username === '' || this.password === '') {
          alert('请输入用户名或密码')
        } else {
          let data = {'username': this.username, 'password': this.password}
          this.$http.post(httpUrl.test, data).then((res) => {
              console.log(res)
              if (res.data === -1) {
                this.tishi = '该用户不存在'
                this.showTishi = true
              } else if (res.data === 0) {
                this.tishi = '密码输入错误'
                this.showTishi = true
              } else if (res.data === 'admin') {
//                路由跳转this.$router.push()
                this.$router.push('/main')
              } else {
                this.tishi = '登录成功'
                this.showTishi = true
                setCookie('username', this.username, 1000 * 60)
                setTimeout(function () {
                  this.$router.push('/view')
                }.bind(this), 1000)
              }
            })
        }
      },
      register(){
        if (this.newUsername==''||this.newPassword==''){
          alert('请输入用户名或者密码')
        } else {
          let data ={'username': this.newUsername, 'password': this.newPassword}
          this.$http.post(httpUrl.test2,data).then((res) => {
            console.log(res)
              if (res.data=='ok'){
                this.tishi = "注册成功"
                this.showTishi = true
                this.username = ''
                this.password = ''
                /*注册成功之后再跳回登录页*/
                setTimeout(function(){
                  this.showRegister = false
                  this.showLogin = true
                  this.showTishi = false
                }.bind(this),1000)
              }
            })
        }
      },
      ToRegister(){
        this.showRegister=true
        this.showLogin=false
      },
      ToLogin(e){
        e.preventDefault()
        this.showRegister=false
        this.showLogin=true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin"
  .detail-wrapper
    width 100%
    min-height 100%
    .detail-item
      width 90%
      height 90%
      margin 10px auto
      .detail-avatar
        width 100%
        height 20%
        position relative
        .icon-circle-left
          position absolute
          top 20px
          left 0
          font-size 32px
        .image
          position absolute
          width 150px
          height 70px
          top 10px
          right 50px
      .login-wrap
        text-align center
        input
          display block
          width 250px
          height 40px
          line-height 40px
          margin 0 auto
          margin-bottom 10px
          outline none
          border 1px solid #888
          padding 10px
          box-sizing border-box
        p
          color red
        button
          display block
          width 250px
          height 40px
          line-height 40px
          margin 0 auto
          border none
          background #41b883
          color #fff
          font-size 16px
          margin-bottom 5px
        span
          cursor pointer
        span:hover
          color #41b883
      .register-wrap
        text-align center
        input
          display block
          width 250px
          height 40px
          line-height 40px
          margin 0 auto
          margin-bottom 10px
          outline none
          border 1px solid #888
          padding 10px
          box-sizing border-box
        p
          color red
        button
          display block
          width 250px
          height 40px
          line-height 40px
          margin 0 auto
          border none
          background #41b883
          color #fff
          font-size 16px
          margin-bottom 5px
        span
          cursor pointer
        span:hover
          color #41b883
      .detail-line
        display flex
        width 100%
        margin 28px 0 24px
        padding 0 36px
        .line
          flex 1
          position relative
          top -6px
          border-bottom 2px solid rgba(255, 255, 255, 0.2)
        .text
          padding 0 12px
          line-height 14px
          font-weight 700
          font-size 14px
      .detail-bottom
        display flex
        width 80%
        margin 28px 0 24px
        padding 0 36px
        .o_sina, .o_qq
          flex 1
          margin-left 33px

  /*position relative*/
</style>
