<template>
  <div class="hot-wrapper">
    <div class="hot-list" ref="hotWrapper">
      <ul>
        <li class="hot-item" @click="movieDetail(item)"
            v-for="item in hotPlays" :key="item.id">
          <div class="hot-content">
            <img class="content-image" :src="item.img">
            <span class="content-score" v-show="item.r > 0">{{item.r}}</span>
            <span class="content-title">{{item.tCn}}</span>
          </div>
        </li>
      </ul>
    </div>
    <movie-detail class="detail"
                  :movies="showMovie"
                  v-show="isShow" :show.sync="isShow"/>
  </div>
</template>

<script>
  import IScroll from 'iscroll/build/iscroll-probe'
  import MovieDetail from './MovieDetail'
  export default {
    created() {
      this.$axios.get('/api/hotPlay')
        .then(response => {
//          console.log(response)
          response = response.data
          if (response.errno === 0) {
            this.hotPlays = response.data
            this.$nextTick(() => {
              this._initScroll()
            })
          }
        })
        .catch(error => {
          alert(error)
        })
    },
    data() {
      return {
        hotPlays: [],
        scrollY: 0,
        isShow: false,
        showMovie: {}
      }
    },
    methods: {
      movieDetail(item) {
        this.isShow = true
        this.showMovie = item
      },
      _initScroll() {
        this.hotWrapper = new IScroll(this.$refs.hotWrapper, {
          click: true,
          probeType: 3
        })
        let self = this
        this.hotWrapper.on('scroll', function () {
          self.scrollY = Math.abs(Math.round(this.y))
        })
      }
    },
    components: {
      MovieDetail
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .hot-wrapper
    width 100%
    .hot-list
      width 90%
      margin 0 auto
      .hot-item
        float left
        display table
        box-sizing content-box
        width 25%
        height 150px
        .hot-content
          position relative
          margin 10px 5px
          .content-image
            width 100%
            height 90px
          .content-score
            position absolute
            top 5px
            right 2px
            display inline-block
            color #FFFFFF
            font-size 9px
            border-radius 4px
            background red
          .content-title
            display inline-block
            font-size 12px
    .detail
      position fixed
      z-index 100
      top 0
      left 0
      height 100%
      width 100%
      overflow auto
      transition all 0.5s
      background white
      backdrop-filter blur(10px)
      color black
      &.fade-enter, &.fade-leave-to {
        opacity 0
      }
</style>
