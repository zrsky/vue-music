<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to='/recommend'><span class="tab-link">推荐</span></router-link>
    <router-link tag="div" class="tab-item" to='/singer'><span class="tab-link">歌手</span></router-link>
    <router-link tag="div" class="tab-item" to='/rank'><span class="tab-link">排行</span></router-link>
    <router-link tag="div" class="tab-item" to='/search'><span class="tab-link">搜索</span></router-link>
  </div>
</template>
<script>

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .tab
    top:44px
    display:flex
    position:fixed
    z-index:1000
    background:#000
    width:100%
    color:#fff
    padding-top:20px
    font-size:14px
    .tab-item
      flex:1
      text-align:center
    .active span
      display: inline-block
      padding-bottom: 8px
      border-bottom: 2px solid #ffcd32
      color:#ffcd32

</style>
