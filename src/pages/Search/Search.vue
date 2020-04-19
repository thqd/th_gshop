<template>
  <div>
    <section class="search">
      <nav-bar class="search_nav">
        <div slot="center" class="search_center">搜索</div>
      </nav-bar>
      <form class="search_form" action="#">
        <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input" />
        <input type="submit" name="submit" class="search_submit" />
      </form>
    </section>
  </div>
</template>

<script>
import NavBar from "../../components/NavBar/NavBar";
export default {
  name: "Search",
  components: {
    NavBar
  }
};
</script>

<style scoped>
.search_nav {
  background-color: green;
}
.search_center {
  text-align: center;
  line-height: 44px;
  font-size: 18px;
  color: white;
  letter-spacing: 4px;
}
.section.search {
  width: 100%;
}
.search_form {
  background-color: #fff;
  padding: 8px 8px;
}
.section.search .search_form::after {
  content: "";
  display: block;
  clear: both;
}
.section.search .search_form input {
  height: 35px;
  padding: 0 4px;
  border-radius: 2px;
  font-weight: bold;
  outline: none;
}
.search_form input.search_input {
  float: left;
  width: 79%;
  border: 4px solid #f2f2f2;
  font-size: 14px;
  color: #333;
  background-color: #f2f2f2;
  height: 28px;
}
.search_form input.search_submit {
  float: right;
  width: 18%;
  border: 4px solid #02a774;
  font-size: 16px;
  color: #fff;
  background-color: #02a774;
}
</style>