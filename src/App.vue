<template>
  <div class="main">
    <m-header></m-header>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from './components/header/header.vue'
import Tab from './components/tab/tab.vue'
export default {
  name: 'App',
  components:{
    MHeader,
    Tab
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import './common/stylus/reset.styl';
  .main
    background:#000
    width:100%
</style>
