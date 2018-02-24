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
          <div v-if="seller.supports" class="supporrs">
            <span class="icon"></span>
            <span class="text">{{seller.supports[0].description}}</span>
          </div>
        </div>
      </div>
      <div class="header-bottom"></div>

    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    computed: {
      aaa: function() {
        return this.seller;
      }
    },
    created() {
      console.log(this.aaa);
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin.styl';
.header
  color: #fff
  background: #000
  .content
    display: flex
    padding: 24px 12px 18px 24px
    .avatar
      img
        border-radius: 2px

</style>
