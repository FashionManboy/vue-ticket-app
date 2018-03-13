<template>
    <div class="home-wrapper">
      <div class="home-title">选择你的栏目</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .home-wrapper
    width 100%
    .home-title
      width 50%
      margin 100px auto
      text-align center
      font-size 26px
      color red
</style>
