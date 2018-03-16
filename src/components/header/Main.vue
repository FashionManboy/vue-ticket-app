<template>
    <div>
      <h3>所有注册用户</h3>
      <ul>
        <li v-for="item in list" :key="item.id">{{item.username}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              list: ''
            }
        },
      mounted() {
          this.$http.get(httpUrl.test1).then((res) => {
              this.list = res.data
              console.log(res)
            })
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul{
    padding: 0;
  }
  ul li{
    list-style: none;
  }
</style>
