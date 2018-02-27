<template>
    <div class="goods">
      <div class="menu-wrapper">
        <ul>
          <li v-for="item in goods" :key="item.id" class="menu-item">
            <span class="text border-1px"><span v-show="item.type > 0" class="icon" :class="classMap[item.type]"></span>{{item.name}}</span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper">
        <ul>
          <li v-for="item in goods" class="food-list" :key="item.id">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li v-for="food in item.foods" :key="food.id" class="food-item">
                <div class="icon">
                  <img :src="food.icon" alt="">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span>月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span>￥{{food.price}}</span>
                    <span v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'goods',
        props: {},
        data() {
          return {
            goods: []
          };
        },
        created() {
          this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
          this.$http.get('./api/goods').then((res) => {
            this.goods = res.data.data;
            console.log(this.goods);
          });
        }
    };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin.styl';
.goods
  position: absolute
  top: 174px
  left: 0
  bottom: 46px
  width: 100%
  display: flex
  overflow: hidden
  .menu-wrapper
    flex:0 0 80px
    width: 80px
    background: #f3f5f7
    .menu-item
      display: table
      height: 54px
      width: 56px
      line-height: 14px
      padding: 0 12px
      .icon
        display: inline-block
        vertical-align middle
        margin-right: 2px
        width: 12px
        height: 12px
        background-size: 12px 12px
        background-repeat: no-repeat
        &.decrease
          bg-image('decrease_3')
        &.discount
          bg-image('discount_3')
        &.guarantee
          bg-image('guarantee_3')
        &.invoice
          bg-image('invoice_3')
        &.special
          bg-image('special_3')
      .text
        display: table-cell
        width: 56px
        vertical-align: middle
        font-size: 12px
        border-1px(rgba(7,17,27,0.1))
  .foods-wrapper
    flex: 1
    background: #fff
</style>
