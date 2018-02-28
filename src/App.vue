<template>
  <div id="app">
    <v-header :seller.sync="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <transition :name="transitionName">
      <router-view class="content-view"></router-view>
    </transition>
    <shopcart></shopcart>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from 'components/header/header';
  import shopcart from 'components/shopcart/shopcart';
  import Vue from 'vue';
  import Axios from 'axios';
  import VueAxios from 'vue-axios';
  Vue.use(VueAxios, Axios);
  const ERR_OK = 0;
  export default {
    name: 'App',
    data() {
      return {
        transitionName: 'slide-left',
        seller: {}
      };
    },
    created() {
      this.axios.get('./api/seller').then((response) => {
        if (response.data.errno === ERR_OK) {
          this.seller = response.data.data;
        }
      });
    },
    mounted () {
    },
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
      }
    },
    components: {
      'v-header': header,
      shopcart
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import './common/stylus/mixin.styl';
  .content-view
    position: absolute
    width: 100%
    transition: all 0.8s cubic-bezier(0.55,0,0.1,1)
  .slide-left-enter, .slide-right-leave-active
    opacity: 0
  .slide-left-leave-active, .slide-right-enter
    opacity: 0
  #app
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      border-1px(rgba(7,17,27,.1))
      .tab-item
        flex: 1
        text-align: center
        & > a
          display: block
          font-size: 14px
          color: rgb(77,85,93)
          &.active
            color: rgb(240,20,20)
</style>
