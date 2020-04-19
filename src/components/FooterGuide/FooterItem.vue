<template>
  <div id="footer-item" @click="itemClick">
    <div>
     <slot name="item-icon"></slot>
    </div>
    <div>
     <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterItem",
  methods: {
    itemClick() {}
  }
};
</script>

<style>
.icon_order{
  background: url("../../assets/img/person.png");
}
#footer-item > div:first-child{
  width: 26px;
  height: 26px;
  background-size: 100% 100%;
  margin: 0 auto;
}
</style>