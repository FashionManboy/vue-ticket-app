<template>
    <div class="movie-wrap">
        <div class="back-icon">
          <i class="icon-circle-left" @click="$emit('update:show',false)"></i>
        </div>
        <div class="movie-box">
          <img :src="movies.img">
          <h3>{{movies.tCn}}</h3>
          <div>{{movies.tEn}}</div>
          <div>{{movies.cC}}分钟</div>
          <div class="score-ball" v-show="movies.r > 0">评分:{{movies.r}}</div>
          <div v-show="movies.commonSpecial">" {{movies.commonSpecial}} "</div>
          <div>主演:{{movies.actors}}</div>
          <div>导演:{{movies.dN}}</div>
          <div>类型:{{movies.movieType}}</div>
          <div>{{movies.rd}}中国上映</div>
          <div class="d-ball" v-show="movies.is3D">3D</div>
          <div class="iMax-ball" v-show="movies.isDMAX">中国巨幕</div>
        </div>
    </div>
</template>

<script>
    export default {
      props: {
        movies: Object
      },
        data() {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin"
  .movie-wrap
    width 100%
    min-height 100%
    .back-icon
      margin 10px 20px
      .icon-circle-left
        font-size 26px
    .movie-box
      position relative
      width 90%
      margin 0 auto
      height 90%
      text-align center
      img
        display block
        width 100%
        height 90%
        margin 0 auto
      .score-ball
        position absolute
        top 10%
        right 5%
        border-radius 10%
        color white
        font-size 20px
      .d-ball
        position absolute
        width 8%
        top 20%
        right 5%
        border-radius 10%
        color white
        font-size 20px
      .iMax-ball
        position absolute
        width 6%
        top 30%
        right 5%
        border-radius 10%
        color white
        font-size 20px
</style>
