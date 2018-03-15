<template>
  <div class='recommend'>
    <div class="recommend_wrapper">
      <div class="slider" ref="slider">
        <div class="slider_group" ref="sliderGroup">
          <div v-if="recommends.length" v-for="recommend in recommends" class="slider-item">
            <a :href="recommend.linkUrl">
              <img :src="recommend.picUrl">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {getRecommend} from 'api/recommend';
import {ERR_OK} from 'api/config';
export default {
  data() {
    return {
      recommends:[],
    }
  },
  props: {
    loop: {
      type: Boolean,
      default: true
    }
  },
  created() {
    this._getRecommend();
  },
  mounted() {
    // this.$nextTick(()=>{
    //   setTimeout(() => {
    //     this._setSliderWidth();
    //   }, 200)
    // })
  },
  methods: {
    _getRecommend() {
      getRecommend().then((res)=>{
        if(res.code == ERR_OK){
          this.recommends = res.data.slider;
          setTimeout(()=>{
            this._setSliderWidth();
          })
          console.log(res.data.slider)
        }
      })
    },
    _setSliderWidth() {
      console.log('refs: ' + this.$refs.slider.clientWidth)
        let sliderWidth = this.$refs.slider.clientWidth;
        let width = 0;
        this.children = this.$refs.sliderGroup.children;
        console.log('child:' + JSON.stringify(this.children))
        for(var i = 0; i < this.children.length; i++) {
          console.log('children: ' + this.children[i].clientWidth)
           width += this.children[i].clientWidth;
        }
        console.log(width)
        this.$refs.sliderGroup.style.width = width + 'px';
        if(this.loop) {
          this.$refs.sliderGroup.style.width = width * 2 + 'px';
        }
        console.log(this.$refs.sliderGroup.style.width)
    },
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.slider
  overflow:hidden
  .slider-item
    float:left
    img
      width:100%
</style>
