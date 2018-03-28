<template>
    <div class="slider" ref="slider">
        <div class="slider-group" ref="sliderGroup">
          <slot></slot>
        </div>
        <div class="dots">
          <span v-for="(dot,index) in dots" class="dot" :class="{active:currentPage===index}">

          </span>


        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll';
import {addClass} from 'common/js/dom.js';
  export default {
      data() {
        return {
          dots: [],
          currentPage:0,
        }
      },
      props: {
        loop: {
          type: Boolean,
          default: true
        },
        interval: {
          type: Number,
          default: 400
        },
        autoPlay: {
          type: Boolean,
          default: true
        }
      },
      mounted() {
        this.$nextTick(()=>{
          // setTimeout(() => {
            this._setSliderWidth();
            this._initSlider();
            this._play();
          // }, 20)
        });
        window.addEventListener('resize', ()=>{
          if(!this.slider) {
            return;
          }
          this._setSliderWidth(true);
        });
      },
      methods: {
       _setSliderWidth(isResize) {
          this.children = this.$refs.sliderGroup.children
          this.dots = new Array(this.children.length);
          let width = 0
          let sliderWidth = this.$refs.slider.clientWidth
          for (let i = 0; i < this.children.length; i++) {
            let child = this.children[i]
            addClass(child, 'slider-item')

            child.style.width = sliderWidth + 'px'
            width += sliderWidth
          }
          if (this.loop && !isResize) {
            width += 2 * sliderWidth
          }
          this.$refs.sliderGroup.style.width = width + 'px'
        },
        _initSlider() {
            let that = this;
            this.slider = new BScroll(this.$refs.slider, {
              scrollX: true,
              scrollY: false,
              momentum: false,
              snap: true,
              snapLoop: this.loop,
              snapThreshold: 0.3,
              snapSpeed: 400,
              click: true
            });
            this.slider.on('scrollEnd', ()=>{
              this.currentPage = this.slider.getCurrentPage().pageX - 1;
              if(this.autoPlay) {

              this.timer = setTimeout(()=>{
                this._play();
              }, 2000)
            }
              // console.log(this.currentPage)
            });
            this.slider.on('beforeScrollStart', ()=>{
              clearTimeout(this.timer);
            })

        },
        _play() {
          let getPage = this.slider.getCurrentPage().pageX+1;
          // if(this.loop) {
          //   getPage += 1;
          // }
          this.timer = setTimeout(() => {
            this.slider.goToPage(getPage,0,this.interval);
          }, 2000)

        }
      },
      destroyed() {
        clearTimeout(this.timer);
      }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .slider
    min-height: 1px
    position: relative
    .slider-group
      position: relative
      overflow: hidden
      white-space: nowrap
      .slider-item
        float: left
        box-sizing: border-box
        overflow: hidden
        text-align: center
        a
          display: block
          width: 100%
          overflow: hidden
          text-decoration: none
        img
          display: block
          width: 100%
    .dots
      position:absolute
      left: 0
      right: 0
      bottom: 14px
      font-size: 0
      text-align: center
      .dot
        width: 8px
        height: 8px
        border-radius: 50%
        background: rgba(255,255,255,0.5)
        display: inline-block
        margin: 0 4px
        &.active
          width: 20px
          height: 8px
          border-radius: 5px
          background: rgba(255,255,255,0.8)

</style>
