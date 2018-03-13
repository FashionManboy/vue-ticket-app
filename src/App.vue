<template>
  <div id="app">
    <ele-header/>
    <time-location/>
    <div class="tab boder-1px">
      <div class="tab-item">
        <router-link to="hotPlay">正在热映</router-link>
      </div>
      <div class="tab-item">
        <router-link to="comePlay">即将上映</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import EleHeader from './components/header/Header'
  import TimeLocation from './components/location/TimeLocation'
  export default {
    name: 'App',
    components: {
      EleHeader,
      TimeLocation
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"
  .tab
    display flex
    width 100%
    height 40px
    line-height 40px
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex 1
      text-align center
</style>
