<template>
  <div class="scroll_wrapper" ref="scroll">
    <slot></slot>
  </div>
</template>
<script>
import BScroll from "better-scroll";
 export default {
  props: {
    probType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: null
    }
  },
  mounted() {
    this.$nextTick(()=>{
      this._initScroll();
    })
    setTimeout(()=>{
      this.refresh();
    }, 1000)
  },
   methods: {
    _initScroll() {
      this.scroll = new BScroll(this.$refs.scroll, {
        click:this.click,
      })
    },
    refresh() {
      this.scroll.refresh();
    },

   },
   watch: {
    data() {
      this.refresh();
    }
   }
 }

</script>
<style lang="stylus" rel="stylesheet/stylus">


</style>
