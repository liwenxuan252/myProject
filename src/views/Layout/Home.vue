<template>
  <div class="home">
    <Menu />
    <div :class="{ 'menu-app': true, 'menu-unfold': $store.state.collapsed }">
      <slider-nav />
      <div class="main-container">
          123
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './components/menu.vue';
import SliderNav from './components/sliderNav.vue';

export default {
  components: {
    SliderNav,
    Menu,
  },
};
</script>

<style lang="less">
@import url("~@/assets/css/home.less");
</style>
