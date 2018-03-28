<template>
<div class="header">
  <i class="icon"></i>
  <h1 class="title">Chicken Music</h1>
</div>
</template>
<script></script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixin.styl'
  .header
    position:fixed
    top:0
    left:0
    z-index: 1000
    height:44px
    width:100%
    text-align:center
    background:#000
    .title
      display:inline-block
      font-size:20px
      font-family: 'Andalus'
      font-weight:400
      color:#ffcd32
      line-height:44px
      margin:0
    .icon
      display:inline-block
      vertical-align:middle
      margin-top:-7px
      margin-right:5px
      width:30px
      height:32px
      bg-image('logo')

</style>
