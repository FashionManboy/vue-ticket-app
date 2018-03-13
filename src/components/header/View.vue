<template>
    <div>
      <h3>欢迎{{name}}</h3>
      <a href="#" @click="quit">注销登录</a>
    </div>
</template>

<script>
  import { getCookie, delCookie } from '../../assets/js/cookie'

    export default {
        data() {
            return {
              name: ''
            }
        },
        mounted() {
//          页面挂截获取保存的cookie值,渲染到页面上
          let uname = getCookie('username')
          this.name = uname
//          如果cookie不存在则跳转到登录页
          if (uname === '') {
            this.$router.push('/login')
          }
        },
      methods: {
          quit() {
//            删除cookie
            delCookie('username')
          }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
