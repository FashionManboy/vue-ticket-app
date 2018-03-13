<template>
  <div class="location-wrapper">
    <div class="location-item">
      <div class="location-box">
            <span class="location-posit" @click="showMap">获取定位
              <i class="icon-circle-down"></i>
            </span>
        <input v-model="movie" type="text" placeholder="影片/影院/影人,任你搜">
      </div>
    </div>
    <!--<div v-if="currentMovie"></div>-->
    <transition name="fade">
      <detail-map
        class="show-map"
        :show.sync="isShow"
        v-show="isShow"/>
    </transition>
  </div>
</template>

<script>
  import DetailMap from './DetailMap'

  export default {
//    created() {
//      this.$axios.get('/api/hotPlay')
//        .then(response => {
//          response = response.data
//          if (response.errno === 0) {
//            this.items = response.data
//          }
//        })
//        .catch(error => {
//          alert(error)
//        })
//    },
    data() {
      return {
        items: [],
        movie: '',
        isShow: false
      }
    },
    methods: {
      showMap() {
        this.isShow = true
      }
    },
    components: {
      DetailMap
    }
//    computed: {
//      currentMovie() {
//        let template = /[\u4E00-\u9FA5]/g
//        let trueMovie = false
//        let data = null
//        if (this.movie.trim().length > 0) {
//          let movieReg = new RegExp(this.movie)
//          trueMovie = movieReg.test(template)
//          if (trueMovie) {
//            for (let value in this.items) {
//              if (movieReg.test(this.items[value].tCn)) {
//                data = this.items[value]
//                break
//              }
//            }
//          }
//        }
//
//        return data
//      }
//    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .location-item
    width 100%
    height 60px
    line-height 60px
    border-1px(rgba(7, 17, 27, 0.1))
    .location-box
      width 100%
      height 50px
      line-height 50px
      margin 5px auto
      .location-posit
        display inline-block
        width 100px
        height 50px
        line-height 50px
        font-size 16px
        text-align center
        margin 0 10px
  .show-map
    position: fixed
    z-index 100
    top 0
    left 0
    height 100%
    width 100%
    overflow auto;
    transition all 0.5s
    background rgba(7, 17, 27, 0.8)
    backdrop-filter blur(10px)
    &.fade-enter, &.fade-leave-to {
      opacity 0
    }
</style>
