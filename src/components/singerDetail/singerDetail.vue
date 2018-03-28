<template>
 <transition name="slide">
   <div class="list-detail">
  </div>
 </transition>
</template>
<script>
import {getSingerDetail} from 'api/singer';
export default {
  created() {
    getSingerDetail('002J4UUk29y8BY').then(res=>{
      console.log(res)
    })
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
 div
  position:fixed
  z-index:100000000
  top:0
  left:0
  bottom:0
  right:0
  background:#000
 .slide-enter-active, .slide-leave-active
  transition: all 0.3s
 .slide-enter, .slide-leave-to
  transform: translate3d(100%, 0, 0)
</style>
