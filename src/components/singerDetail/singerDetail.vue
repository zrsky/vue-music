<template>
 <transition name="slide">
   <div class="list-detail">
  </div>
 </transition>
</template>
<script>
import {getSingerDetail} from 'api/singer';
import {ERR_OK} from 'api/config.js';
import {createSong} from 'common/js/song.js';
export default {
  data() {
    return {
      songs: {},
    }
  },
  created() {
    this._getDetail();
  },
  methods: {
    _getDetail() {
      getSingerDetail(this.$route.params.id).then(res=>{
        console.log(ERR_OK)
        if(res.code == ERR_OK) {
          this.songs = this._normalizeSongs(res.data.list);
          console.log(this.songs)
        }
    });
    },
    _normalizeSongs(list) {
      let ret = [];
      list.forEach((item,index) => {
        let {musicData} = item;
        if (musicData.songid && musicData.albummid) {
          ret.push(createSong(musicData));
        }
      })
      return ret;
    }
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
