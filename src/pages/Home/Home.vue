<template>
  <div>
    <nav-bar class="home_nav">
      <div slot="left" class="nav_left"></div>
      <div slot="center" class="nav_center ellipsis">江西省南昌市青山湖区高新大道地铁站</div>
      <div slot="right" class="nav_right">
        <span>登陆</span>|
        <span>注册</span>
      </div>
    </nav-bar>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg" />
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg" />
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/3.jpg" />
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/4.jpg" />
              </div>
              <span>简餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/5.jpg" />
              </div>
              <span>新店特惠</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/6.jpg" />
              </div>
              <span>准时达</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/7.jpg" />
              </div>
              <span>预订早餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/8.jpg" />
              </div>
              <span>土豪推荐</span>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/9.jpg" />
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/10.jpg" />
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/11.jpg" />
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/12.jpg" />
              </div>
              <span>简餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/13.jpg" />
              </div>
              <span>新店特惠</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/14.jpg" />
              </div>
              <span>准时达</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg" />
              </div>
              <span>预订早餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg" />
              </div>
              <span>土豪推荐</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <shop-list></shop-list>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/NavBar/NavBar";
import ShopList from "./HomeChild/ShopList";

import Swiper from "swiper";
import "swiper/css/swiper.min.css";

export default {
  name: "Home",
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      // direction: "vertical", // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
  },
  components: {
    NavBar,
    ShopList
  }
};
</script>

<style scoped>
@import "../../assets/css/reset.css";

.home_nav {
  position: fixed;
  z-index: 2;
  text-align: center;
  line-height: 44px;
  font-size: 14px;
  background-color: green;
  color: white;
}
.nav_center {
  margin: auto 20px;
  font-size: 16px;
}
.nav_right > span {
  margin: 0 2px;
}
.nav_left {
  height: 44px;
  background: url("../../assets/img/search_white.png") 50% 50% no-repeat;
  background-size: 20px 20px;
}
.msite_nav {
  position: relative;
  height: 200px;
  top: 44px;
  overflow: hidden;
  background-color: #fff;
}
.msite_nav::before {
  content: "";
  position: absolute;
  z-index: 200;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
}
.swiper-container,
.swiper-wrapper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}
.swiper-slide .link_to_food {
  width: 25%;
  height: 100px;
  text-align: center;
}
.food_container {
}
.food_container img {
  width: 50px;
  height: 50px;
}
.msite_shop_list {
  position: relative;
  margin-top: 44px;
  background: #fff;
}
.msite_shop_list::before {
  content: "";
  position: absolute;
  z-index: 200;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
}
.msite_shop_list .shop_header {
  padding: 10px 10px 0;
}
.shop_header .shop_icon {
  margin-left: 5px;
  color: #999;
}
.shop_header_title {
  color: #999;
  font-size: 14px;
  line-height: 20px;
}

</style>