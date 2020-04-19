<template>
  <div>
    <section class="order">
     <nav-bar class="order_nav">
       <div slot="center">订单列表</div>
     </nav-bar>
      <section class="order_no_login">
        <img src="./images/order/person.png" />
        <h3>登录后查看外卖订单</h3>
        <button>立即登陆</button>
      </section>
    </section>
  </div>
</template>

<script>
import NavBar from "../../components/NavBar/NavBar";
export default {
  name: "Order",
  components: {
    NavBar
  }
};
</script>

<style scoped>
.order_nav{
  text-align: center;
  font-size: 18px;
  letter-spacing: 5px;
  background-color: green;
  color: white;
  line-height: 44px;
}
.order_no_login{
  text-align: center;
}
.order_no_login button{
  width: 100px;
  height: 40px;
  background-color: green;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  color: white;
  font-size: 16px;
}
</style>