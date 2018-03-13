<template>
  <div class="header">
    <div class="header-wrapper">
      <div class="header-icon">
        <div class="icon-img"></div>
      </div>
      <div class="header-item">
        <router-link to="home">首页</router-link>
      </div>
      <div class="header-item">
        <router-link to="ticket">购票</router-link>
      </div>
      <div class="user-icon" @click="showDetail">
        <i class="icon-users"></i>
      </div>
    </div>
    <transition name="fade">
      <detail-view class="detail"
                   v-show="isShow"
                   :show.sync="isShow"
      />
    </transition>
  </div>
</template>

<script>
  import DetailView from './DetailView'

  export default {
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      showDetail() {
        this.isShow = true
      }
    },
    components: {
      DetailView
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .header
    color #FFFFFF
    background black
    .header-wrapper
      display flex
      .header-icon
        flex 2
        vertical-align top
        margin-left 10px
        .icon-img
          display inline-block
          border-radius 4px
          background url("http://static1.mtime.cn/html5/20180207160234/images/2014/logo_mtime.png") no-repeat
          width 5.6em
          height 1.8em
          vertical-align middle
          background-size contain
          box-sizing border-box
          margin 10px auto
      .header-item
        flex 3
        text-align center
        font-size 18px
        line-height 48.797px
        a
          color white
      .user-icon
        flex 3
        text-align center
        .icon-users
          font-size 25px
          line-height 48.797px
    .detail
      position: fixed
      z-index 100
      top 0
      left 0
      height 100%
      width 100%
      overflow auto;
      transition all 0.5s
      background white
      backdrop-filter blur(10px)
      color black
      &.fade-enter, &.fade-leave-to {
        opacity 0
      }
</style>
