<template>
  <div class="comes">
    <div class="comes-wrapper" ref="comesWrapper">
      <ul>
        <li v-for="item in comes"
            :key="item.id"
            class="comes-item">
          <div class="comes-box">
            <div class="box-image">
              <img :src="item.image" width="56" height="80">
            </div>
            <div class="box-title">{{item.title}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import IScroll from 'iscroll/build/iscroll-probe'

  export default {
    created() {
      this.$axios.get('/api/comePlay')
        .then(res => {
          res = res.data
          if (res.errno === 0) {
            this.comes = res.data
            this.$nextTick(() => {
              this._initScroll()
            })
          }
        })
        .catch(err => {
          alert(err)
        })
    },
    data() {
      return {
        comes: []
      }
    },
    methods: {
      _initScroll() {
        this.comesWrapper = new IScroll(this.$refs.comesWrapper, {
          click: true
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .comes
    /*position absolute*/
    /*top 150px*/
    /*bottom 15px*/
    width 100%
    overflow hidden
    .comes-wrapper
      margin 20px 0
      width 100%
      height 100%
      background #f3f5f7
      .comes-item
        position relative
        float left
        display table
        padding 0 12px
        box-sizing content-box
        height 130px
        width 56px
        line-height 14px
        .box-title
          position absolute
          width 56px
          top 85px
          font-size 10px
          text-align center
</style>
