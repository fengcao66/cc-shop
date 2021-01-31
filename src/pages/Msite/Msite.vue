<template>
  <div>
    <section class="msite">
      <!--首页头部-->
      <HeaDerTop title="昌平区北七家宏福科技园(337省道北)">
        <span slot="search"
              class="header_search">
          <i class="iconfont icon-sousuo"></i>
        </span>
        <span slot="login"
              class="header_login">
          <span class="header_login_text">登录|注册</span>
        </span>
      </HeaDerTop>
      <!--首页导航-->
      <nav class="msite_nav">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="javascript:"
                 class="link_to_food">
                <div class="food_container">
                  <img src="../../common/images/nav/14.jpg">
                </div>
                <span>甜品饮品</span>
              </a>
              <a href="javascript:"
                 class="link_to_food">
                <div class="food_container">
                  <img src="../../common/images/nav/2.jpg">
                </div>
                <span>商超便利</span>
              </a>
              <a href="javascript:"
                 class="link_to_food">
                <div class="food_container">
                  <img src="../../common/images/nav/3.jpg">
                </div>
                <span>美食</span>
              </a>
              <a href="javascript:"
                 class="link_to_food">
                <div class="food_container">
                  <img src="../../common/images/nav/4.jpg">
                </div>
                <span>简餐</span>
              </a>
              <a href="javascript:"
                 class="link_to_food">
                <div class="food_container">
                  <img src="../../common/images/nav/5.jpg">
                </div>
                <span>新店特惠</span>
              </a>
              <a href="javascript:"
                 class="link_to_food">
                <div class="food_container">
                  <img src="../../common/images/nav/6.jpg">
                </div>
                <span>准时达</span>
              </a>
              <a href="javascript:"
                 class="link_to_food">
                <div class="food_container">
                  <img src="../../common/images/nav/7.jpg">
                </div>
                <span>预订早餐</span>
              </a>
              <a href="javascript:"
                 class="link_to_food">
                <div class="food_container">
                  <img src="../../common/images/nav/8.jpg">
                </div>
                <span>土豪推荐</span>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:"
                 class="link_to_food">
                <div class="food_container">
                  <img src="../../common/images/nav/9.jpg">
                </div>
                <span>甜品饮品</span>
              </a>
              <a href="javascript:"
                 class="link_to_food">
                <div class="food_container">
                  <img src="../../common/images/nav/10.jpg">
                </div>
                <span>商超便利</span>
              </a>
              <a href="javascript:"
                 class="link_to_food">
                <div class="food_container">
                  <img src="../../common/images/nav/11.jpg">
                </div>
                <span>美食</span>
              </a>
              <a href="javascript:"
                 class="link_to_food">
                <div class="food_container">
                  <img src="../../common/images/nav/12.jpg">
                </div>
                <span>简餐</span>
              </a>
              <a href="javascript:"
                 class="link_to_food">
                <div class="food_container">
                  <img src="../../common/images/nav/13.jpg">
                </div>
                <span>新店特惠</span>
              </a>
              <a href="javascript:"
                 class="link_to_food">
                <div class="food_container">
                  <img src="../../common/images/nav/14.jpg">
                </div>
                <span>准时达</span>
              </a>
              <a href="javascript:"
                 class="link_to_food">
                <div class="food_container">
                  <img src="../../common/images/nav/1.jpg">
                </div>
                <span>预订早餐</span>
              </a>
              <a href="javascript:"
                 class="link_to_food">
                <div class="food_container">
                  <img src="../../common/images/nav/2.jpg">
                </div>
                <span>土豪推荐</span>
              </a>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
          <!-- 如果需要滚动条 -->
          <div class="swiper-scrollbar"></div>
        </div>
      </nav>
      <!--首页附近商家-->
      <shopList></shopList>
    </section>
  </div>
</template>

<script>
import HeaDerTop from '../../components/HeaDerTop/HeaDerTop.vue'
import shopList from '../../components/shopList/shopList.vue'
import Swiper from "swiper"
import '../../../node_modules/swiper/swiper-bundle.min.css'
import '../../../node_modules/swiper/swiper-bundle.min.js'

export default {

  mounted () {
    new Swiper('.swiper-container', {
      direction: 'horizontal', // 垂直切换选项
      loop: true, // 循环模式选项
      // autoplay: true,
      autoplay: { delay: 1000 },

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },

      //如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
      },
    })
  },

  components: {
    HeaDerTop,
    shopList
  }
}
</script>

<style lang="stylus">
@import '../../common/stylus/mixins.styl'
.msite // 首页
  width 100%
  .header
    background-color #02a774
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 45px
    .header_search
      position absolute
      left 15px
      top 50%
      transform translateY(-50%)
      width 10%
      height 50%
      .icon-sousuo
        font-size 25px
        color #fff
    .header_title
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 50%
      color #fff
      text-align center
      .header_title_text
        font-size 20px
        color #fff
        display block
    .header_login
      font-size 14px
      color #fff
      position absolute
      right 15px
      top 50%
      transform translateY(-50%)
      .header_login_text
        color #fff
  .msite_nav
    bottom-border-1px(#e4e4e4)
    margin-top 45px
    height 200px
    background #fff
    .swiper-container
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          .link_to_food
            width 25%
            .food_container
              display block
              width 100%
              text-align center
              padding-bottom 10px
              font-size 0
              img
                display inline-block
                width 50px
                height 50px
            span
              display block
              width 100%
              text-align center
              font-size 13px
              color #666
      .swiper-pagination
        >span.swiper-pagination-bullet-active
          background #02a774
  width 100%
  .profile-number
    margin-top 45.5px
    .profile-link
      clearFix()
      position relative
      display block
      background #02a774
      padding 20px 10px
      .profile_image
        float left
        width 60px
        height 60px
        border-radius 50%
        overflow hidden
        vertical-align top
        .icon-person
          background #e4e4e4
          font-size 62px
      .user-info
        float left
        margin-top 8px
        margin-left 15px
        p
          font-weight 700
          font-size 18px
          color #fff
          &.user-info-top
            padding-bottom 8px
          .user-icon
            display inline-block
            margin-left -15px
            margin-right 5px
            width 20px
            height 20px
            .icon-mobile
              font-size 30px
              vertical-align text-top
          .icon-mobile-number
            font-size 14px
            color #fff
      .arrow
        width 12px
        height 12px
        position absolute
        right 15px
        top 40%
        .icon-jiantou1
          color #fff
          font-size 5px
  .profile_info_data
    bottom-border-1px(#e4e4e4)
    width 100%
    background #fff
    overflow hidden
    .info_data_list
      clearFix()
      .info_data_link
        float left
        width 33%
        text-align center
        border-right 1px solid #f1f1f1
        .info_data_top
          display block
          width 100%
          font-size 14px
          color #333
          padding 15px 5px 10px
          span
            display inline-block
            font-size 30px
            color #f90
            font-weight 700
            line-height 30px
        .info_data_bottom
          display inline-block
          font-size 14px
          color #666
          font-weight 400
          padding-bottom 10px
      .info_data_link:nth-of-type(2)
        .info_data_top
          span
            color #ff5f3e
      .info_data_link:nth-of-type(3)
        border 0
        .info_data_top
          span
            color #6ac20b
  .profile_my_order
    top-border-1px(#e4e4e4)
    margin-top 10px
    background #fff
    .my_order
      display flex
      align-items center
      padding-left 15px
      >span
        display flex
        align-items center
        width 20px
        height 20px
        >.iconfont
          margin-left -10px
          font-size 30px
        .icon-order-s
          color #02a774
        .icon-jifen
          color #ff5f3e
        .icon-vip
          color #f90
        .icon-fuwu
          color #02a774
      .my_order_div
        width 100%
        border-bottom 1px solid #f1f1f1
        padding 18px 10px 18px 0
        font-size 16px
        color #333
        display flex
        justify-content space-between
        span
          display block
        .my_order_icon
          width 10px
          height 10px
          .icon-jiantou1
            color #bbb
            font-size 10px
</style>