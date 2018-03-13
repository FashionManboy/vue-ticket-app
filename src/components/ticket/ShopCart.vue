<template>
  <div class="shopCart-wrapper">
    <div class="shopcart" v-show="nums>0">
      <div class="footer-shopcart" @click="toggleList()">
        购物车
        <div class="num" v-show="nums>0">{{nums}}</div>
      </div>
    </div>
    <transition name="fold">
      <div class="shopcart-list" v-show="listShow">
        <div class="list-content" ref="listContent">
          <ul>
            <li class="ticket boder-1px" v-for="ticket in shopCartTickets" :key="ticket.t">
              <div class="list-name">{{ticket.t}}</div>
              <div class="cartcontrol-wrapper">
                <cart-control :ticket="ticket" @decToCart="decToCart" @addToCart="addToCart"/>
              </div>
            </li>
          </ul>
          <div class="list-empty" @click="$emit('empty')">清空</div>
        </div>

      </div>
    </transition>
    <!--<div class="list-mask" v-show="listShow" @click="togglelist()"></div>-->
  </div>
</template>

<script>
  import CartControl from './CartControl'
  import IScroll from 'iscroll'

  export default {
    props: {
      shopCartTickets: Array
    },
    data() {
      return {
        fold: true
      }
    },
    computed: {
      nums() {
        let num = 0
        this.shopCartTickets.forEach(ticket => {
          num += ticket.count
        })
        return num
      },
      listShow() {
        if (!this.nums) {
          // eslint-disable-next-line
          this.fold = true
          return false
        }
        let show = !this.fold
        if (show) {
          this.$nextTick(() => {
            if (!this.scroll) {
              // eslint-disable-next-line
              this.scroll = new IScroll(this.$refs.listContent, {
                click: true
              })
            } else {
              this.scroll.refresh()
            }
          })
        }
        return show
      }
    },
    methods: {
      toggleList() {
        if (!this.nums) {
          return
        }
        this.fold = !this.fold
      },
      decToCart(t) {
        this.$emit('decToCart', t)
      },
      addToCart(t) {
        this.$emit('addToCart', t)
      }
    },
    components: {
      CartControl
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .shopcart
    position fixed
    top 250px
    right 0
    width 5%
    height 100px
    z-index 3
    background pink
    border-radius 40em
    color red
    text-align center

  .shopcart-list
    position absolute
    top 90px
    right 5%
    z-index 2
    width 90%
    transition all 0.5s
    &.fold-enter, &.fold-leave-to
      opacity 0
      transform translateX(100%)
    .list-content
      padding 0 18px
      max-height 200px
      overflow hidden
      background #fff
      .ticket
        display flex
        padding 12px 0
        border-1px(rgba(7, 17, 27, 0.1))
        .list-name
          flex 1
          line-height 24px
          font-size 14px
          color rgb(7, 17, 27)
    .list-empty
      float right
      font-size 16px
      color red
</style>
