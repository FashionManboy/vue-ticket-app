<template>
  <div class="tickets">
    <div class="ticket-wrapper" ref="ticketWrapper">
      <ul>
        <li class="ticket-item" v-for="item in tickets" :key="item.id">
          <div class="ticket-box">
            <div class="ticket-image"><img :src="item.img" width="100" height="160"></div>
            <div class="ticket-content">
              <div class="ticket-title">{{item.t}}</div>
              <br>
              <div class="ticket-score" v-show="item.r > 0">评分:{{item.r}}</div>
              <div class="ticket-commonSpecial" v-show="item.commonSpecial">" {{item.commonSpecial}} "</div>
              <br>
              <div class="ticket-actor">主演:{{item.actors}}</div>
              <div class="ticket-director">导演:{{item.dN}}</div>
              <div class="ticket-movieType">类型:{{item.movieType}}</div>
              <div class="ticket-is3D" v-show="item.is3D">3D</div>
              <div class="ticket-isDMAX" v-show="item.isDMAX">中国巨幕</div>
            </div>
          </div>
          <div class="cartcontrol-wrapper">
            <cart-control @decToCart="decToCart"
                          @addToCart="addToCart"
                          :ticket="findCurrentTicket(item.t)"/>
          </div>
        </li>
      </ul>
    </div>
    <Shop-cart ref="shopCart"
               :shop-cart-tickets="shopCartTickets"
               @decToCart="decToCart"
               @addToCart="addToCart"
               @empty="empty"/>
  </div>
</template>

<script>
  import IScroll from 'iscroll/build/iscroll-probe'
  import ShopCart from './ShopCart'
  import CartControl from './CartControl'
  export default {
    created() {
      this.$axios.get('/api/hotPlay')
        .then(res => {
          res = res.data
          if (res.errno === 0) {
            this.tickets = res.data
            //            The iScroll needs to be initiated when the DOM is ready
//            保证需要用到iscroll的element内容必须加载完毕
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
        tickets: [],
        shopCartTickets: []
      }
    },
    methods: {
      _initScroll() {
        this.ticketWrapper = new IScroll(this.$refs.ticketWrapper, {
          click: true
        })
      },
      findCurrentTicket(t) {
        let ticket = this.shopCartTickets.find(ticket => ticket.t === t)
        if (!ticket) {
          ticket = {t, count: 0}
        }
        return ticket
      },
      addToCart(t, target) {
        let cart = this.shopCartTickets.find(c => c.t === t)
        if (!cart) {
          let p
          for (let i = 0; i < this.tickets.length; i++) {
            if (this.tickets[i].t === t) {
              p = this.tickets[i]
              break
            }
          }
          cart = Object.assign({}, p, {count: 1})
          this.shopCartTickets.push(cart)
        } else {
          cart.count += 1
        }
      },
      decToCart(t) {
        let cart = this.shopCartTickets.find(c => c.t === t)
        if (cart.count <= 1) {
          // 直接将商品删除
          let index = this.shopCartTickets.indexOf(cart)
          this.shopCartTickets.splice(index, 1)
        } else {
          cart.count--
        }
      },
      empty() {
        this.shopCartTickets.splice(0, this.shopCartTickets.length)
      }
    },
    components: {
      ShopCart,
      CartControl
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .tickets
    position absolute
    top 160px
    bottom 10px
    width 100%
    overflow hidden
    .ticket-wrapper
      width 100%
      height 100%
      background #f3f5f7
      .ticket-item
        position relative
        display table
        padding 10px 0
        box-sizing content-box
        height 54px
        width 100%
        line-height 14px
        border-1px(rgba(7, 17, 27, 0.1))
        .ticket-box
          display flex
          .ticket-image
            flex 0 0 100px
            margin 0 10px
          .ticket-content
            position relative
            flex 1
            font-size 12px
            text-align center
            .ticket-title
              font-weight bold
              font-size 16px
            .ticket-score
              margin 0 auto
              width 50px
              height 20px
              background red
              line-height 20px
              color white
              font-size 9px
        .cartcontrol-wrapper
          position absolute
          right 0
          bottom 2px
</style>
