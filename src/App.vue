<template>
  <div id="app">
    <m-header></m-header>
    <m-tab></m-tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>


<script>
import MHeader from "@/components/Header";
import MTab from "@/components/Tab";
export default {
  components: { MHeader, MTab }
};
</script>
