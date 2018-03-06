<template>
  <transition name="move">
    <div class="food" v-show="showFlag">
      <div class="food-content">
        <div class="image-header">
          <img :src="food.image" alt="">
          <div class="back">
            <i class="icon-arrow_lift" @click="hide"></i>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "food",
        props: {
          food: {
            type: Object
          }
        },
        data() {
          return {
            showFlag: false
          };
        },
        methods: {
          show() {
            this.showFlag = true;
          },
          hide() {
            this.showFlag = false;
          }
        }
    };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .food
    position: fixed
    left: 0
    top: 0
    bottom: 48px
    z-index: 30
    width: 100%
    background: #fff
    transform: translate3d(0, 0, 0)
    &.move-enter-active, &.move-leave-active
      transition: all 0.2s linear
    &.move-enter, &.move-leave-active
      transform: translate3d(100%, 0, 0)
    .image-header
      position: relative
      width: 100%
      height: 0
      padding-top: 100%
      img
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
      .back
        position: absolute
        top: 10px
        left: 0
        .icon-arrow_lift
          display:block
          padding: 10px
          font-size: 20px
          color: #fff
</style>
