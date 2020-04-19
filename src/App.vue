<template>
  <div id="app">
    <router-view></router-view>
    <footer-guide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";

export default {
  name: "App",
  components: {
    FooterGuide
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
a{
text-decoration:none;
color:#333;
}
</style>
