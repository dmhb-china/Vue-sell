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
      <div v-show="detailShow" class="detail">
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <h1 class="name">{{seller.name}}</h1>
            <star :size="48" :score="seller.score"></star>
          </div>
        </div>
        <div class="detail-close">
          <i class="icon-close" @click="closeDetail"></i>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import star from 'components/star/star';
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        detailShow: true
      };
    },
    methods: {
      showDetail() {
        this.detailShow = true;
      },
      closeDetail() {
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
          line-height: 12px
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
    z-index: 100
    width: 100%
    height: 100%
    overflow: auto
    background: rgba(7,17,27,0.8)
    .detail-wrapper
      width: 100%
      min-height: 100%
      .detail-main
        margin-top: 64px
        padding-bottom: 64px
        .name
          line-height: 16px
          font-size: 16px
          font-weight: 700
          color: rgb(255,255,255)
          text-align: center
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
