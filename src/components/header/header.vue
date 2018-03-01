<template>
    <div class="header">
      <div class="content">
        <div class="avatar"><img width="64" height="64" :src="seller.avatar" alt=""></div>
        <div class="sellerInfo">
          <div class="title">
            <span class="brand"></span>
            <span class="name">{{seller.name}}</span>
          </div>
          <div class="desc">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
          <div v-if="seller.supports" class="support">
            <span class="icon" :class="classMap[seller.supports[0].type]"></span>
            <span class="text">{{seller.supports[0].description}}</span>
          </div>
        </div>
        <div v-if="seller.supports" class="support-count" @click="showDetail">
          <span class="count">{{seller.supports.length}}个</span>
          <i class="icon-keyboard_arrow_right"></i>
        </div>
      </div>
      <div class="header-bottom" @click="showDetail">
        <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
      <div class="background">
        <img :src="seller.avatar" width="100%" height="100%" alt="">
      </div>
      <transition name="fade">
        <div v-show="detailShow" class="detail" ref="detailBox">
          <div class="stickBox">
            <div class="detail-wrapper clearfix">
              <div class="detail-main">
                <h1 class="name">{{seller.name}}</h1>
                <div class="star-wrapper">
                  <star :size="48" :score="seller.score"></star>
                </div>
                <div class="title">
                  <div class="line"></div>
                  <div class="text">优惠信息</div>
                  <div class="line"></div>
                </div>
                <ul v-if="seller.supports" class="supports-lists">
                  <li class="support-item" v-for="(item,index) in seller.supports" :key="item.id">
                    <span class="icon" :class="classMap[seller.supports[index].type]"></span>
                    <span class="text">{{seller.supports[index].description}}</span>
                  </li>
                </ul>
                <div class="title">
                  <div class="line"></div>
                  <div class="text">商家公告</div>
                  <div class="line"></div>
                </div>
                <div class="bulletin-content">
                  {{seller.bulletin}}
                </div>
              </div>
            </div>
            <div class="detail-close">
              <i class="icon-close" @click="closeDetail"></i>
            </div>
          </div>
        </div>
      </transition>
    </div>
</template>

<script type="text/ecmascript-6">
  import star from 'components/star/star';
  import BScroll from 'better-scroll';
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        detailShow: false
      };
    },
    mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.detailBox, {
          click: true
        });
      });
    },
    methods: {
      showDetail() {
        this.detailShow = true;
      },
      closeDetail(event) {
        if (!event._constructed) {
          this.detailShow = false;
        }
        this.detailShow = false;
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    },
    components: {
      star
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin.styl';
.header
  position: relative
  color: #fff
  background: rgba(7,17,27,.5)
  overflow: hidden
  .content
    display: flex
    padding: 24px 12px 18px 24px
    position: relative
    .avatar
      margin-right: 16px
      img
        border-radius: 2px
    .sellerInfo
      .title
        font-size: 0
        margin-top: 2px
        .brand
          display: inline-block
          vertical-align: middle
          width:30px
          height: 18px
          bg-image('brand')
          background-size: 30px 18px
          background-repeat: no-repeat
        .name
          margin-left: 6px
          vertical-align: middle
          font-size:16px
          color:rgb(255,255,255)
          font-weight: bold
          line-height: 18px
      .desc
        margin: 8px 0 0 0
        font-size: 12px
        color:rgb(255,255,255)
        font-weight: 200
        line-height: 12px
      .support
        font-size: 0
        margin: 10px 0 2px 0
        .icon
          display: inline-block
          vertical-align middle
          margin-right: 4px
          width: 12px
          height: 12px
          background-size: 12px 12px
          background-repeat: no-repeat
          &.decrease
            bg-image('decrease_1')
          &.discount
            bg-image('discount_1')
          &.guarantee
            bg-image('guarantee_1')
          &.invoice
            bg-image('invoice_1')
          &.special
            bg-image('special_1')
        .text
          vertical-align middle
          font-size: 10px
          color: rgb(255,255,255)
          font-weight: 200
          line-height: 16px
          margin-bottom: 64px
    .support-count
      position: absolute
      right: 12px
      bottom: 16px
      padding: 0 8px
      height: 24px
      line-height: 24px
      background-color: rgba(0,0,0,0.2)
      border-radius: 16px
      text-align: center
      font-size:0
      font-weight: 200
      .count
        vertical-align:top
        color: rgb(255,255,255)
        font-size:10px
      .icon-keyboard_arrow_right
        vertical-align: middle
        font-size:10px
        margin-left: 2px
  .header-bottom
    height: 28px
    line-height: 28px
    padding: 0 22px 0 12px
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    background-color: rgba(7,17,27,.2)
    position: relative
    .bulletin-title
      display: inline-block
      width: 22px
      height: 12px
      vertical-align: top
      bg-image('bulletin')
      background-size: 22px 12px
      background-repeat: no-repeat
      margin-top: 8px
    .bulletin-text
      font-size: 10px
      margin: 0 4px
      vertical-align: top
    .icon-keyboard_arrow_right
      position: absolute
      right: 12px
      font-size: 10px
      top: 9px
  .background
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: -1
    filter: blur(10px)
  .detail
    position: fixed
    top: 0
    left: 0
    z-index: 120
    width: 100%
    height: 100%
    overflow: auto
    background: rgba(7,17,27,0.8)
    backdrop-filter: blur(10px)
    opacity: 1
    &.fade-enter-active,&.fade-leave-active
      transition: all 0.3s
    &.fade-enter,&.fade-leave-active
      opacity: 0
      background: rgba(7,17,27,0)
    .stickBox
      min-height: 100%
      &::-webkit-scrollbar
        display: none
      .detail-wrapper
        width: 100%
        min-height: 100%
        .detail-main
          min-height: 100%
          margin-top: 64px
          padding-bottom: 64px
          .name
            line-height: 16px
            font-size: 16px
            font-weight: 700
            color: rgb(255,255,255)
            text-align: center
          .star-wrapper
            margin-top: 18px
            padding: 2px 0
            text-align: center
          .title
            display: flex
            width: 80%
            margin: 28px auto 24px auto
            .line
              flex: 1
              position: relative
              top: -6px
              border-bottom: 1px solid rgba(255,255,255,0.2)
            .text
              font-size: 14px
              padding: 0 12px
              font-weight: 700
          .supports-lists
            width: 80%
            margin: 0 auto
            .support-item
              font-size: 0
              padding: 0 12px
              margin-bottom: 12px
              &:last-child
                margin-bottom: 0
              .icon
                display: inline-block
                width: 16px
                height: 16px
                background-size: 16px 16px
                background-repeat: no-repeat
                &.decrease
                  bg-image('decrease_1')
                &.discount
                  bg-image('discount_1')
                &.guarantee
                  bg-image('guarantee_1')
                &.invoice
                  bg-image('invoice_1')
                &.special
                  bg-image('special_1')
              .text
                font-size: 12px
                line-height: 12px
                font-weight: 200
                margin-left: 6px
                vertical-align: top
                position: relative
                top: 2px
                color: rgb(255,255,255)
          .bulletin-content
            box-sizing: border-box
            width: 80%
            margin: 0 auto
            padding: 0 12px
            font-size: 12px
            font-weight: 200
            color: rgb(255,255,255)
            line-height: 24px
    .detail-close
      box-sizing: border-box
      position: relative
      width: 32px
      height: 32px
      margin: -64px auto 0 auto
      text-align center
      clear: both
      font-size: 32px
</style>
