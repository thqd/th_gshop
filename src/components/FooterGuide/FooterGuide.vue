<template>
  <div id="tab-bar">
    <div
      class="waimai"
      @click="goTo('/home')"
      path="/home"
      :class="{on_waimai: '/home'===$route.path}"
    >
      <div class="icon_text">外卖</div>
    </div>
    <div class="search" path="/search" @click="goTo('/search')" :class="{on_search: '/search'===$route.path}">
      <div class="icon_text">搜索</div>
    </div>
    <div class="order" @click="goTo('/order')" :class="{on_order: '/order'===$route.path}">
      <div class="icon_text">订单</div>
    </div>
    <div class="person" @click="goTo('/person')" :class="{on_person: '/person'===$route.path}">
      <div class="icon_text">我的</div>
    </div>
  </div>
</template>

<script>
import FooterItem from "./FooterItem";
export default {
  name: "FooterGuide",
  date(){
    return{

    }
  },
  components: {
    FooterItem
  },
  methods: {
    goTo(path) {
      if (path != this.$route.path) {
        this.$router.replace(path);
      }
    }
  }
};
</script>

<style scoped>
#tab-bar {
  position: fixed;
  bottom: 0;
  background-color: white;
  display: flex;
  width: 100%;
  height: 49px;
  border-top: 1px solid #4e4e4e;
}
#tab-bar > div {
  flex: 1;
  text-align: center;
  padding-top: 5px;
  background-size: 28px 28px;
}
#tab-bar > div > div {
  font-size: 14px;
}
.waimai {
  background: url("../../assets/img/waimai.png") 50% 10% no-repeat;
}
.on_waimai {
  background: url("../../assets/img/waimai_active.png") 50% 10% no-repeat;
  color: red;
}
.search {
  background: url("../../assets/img/search.png") 50% 10% no-repeat;
}
.on_search {
  background: url("../../assets/img/search_active.png") 50% 10% no-repeat;
  color: red;
}
.order {
  background: url("../../assets/img/order.png") 50% 10% no-repeat;
}
.on_order{
   background: url("../../assets/img/order_active.png") 50% 10% no-repeat;
   color: red;
}
.person {
  background: url("../../assets/img/person.png") 50% 10% no-repeat;
}
.on_person{
   background: url("../../assets/img/person_active.png") 50% 10% no-repeat;
   color: red;
}
.icon_text {
  padding-top: 25px;
}
</style>