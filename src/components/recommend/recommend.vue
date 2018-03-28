<template>
  <!-- <scroll ref="scrolls" :data="recommends"> -->
  <div class='recommend'>
    <div class="recommend_wrapper" v-if="recommends.length">
      <slider>
        <div v-for="recommend in recommends">
          <a :href="recommend.linkUrl">
            <img :src="recommend.picUrl">
          </a>
        </div>
      </slider>
    </div>
    <div class="songDiscList">
      <div class="songDiscList_wrapper">
          <h1 class="title">热门歌单推荐</h1>
          <ul v-show="getDiscList.length">
            <li class="songDiscList_li" v-for="list in getDiscList">
              <div class="list_left_wrapper">
                <img width="60px" v-lazy="list.picUrl">
              </div>
              <div class="list_right_wrapper">
                <p class="name">{{list.songName}}</p>
                <p class="songDisc">{{list.songDisc}}</p>
              </div>
            </li>
          </ul>
      </div>
    </div>
  </div>
  <!-- </scroll> -->
</template>
<script>
import {getRecommend,getDiscList} from 'api/recommend';
import {ERR_OK} from 'api/config';
import slider from 'base/slider/slider';
import scroll from 'base/scroll/scroll';


export default {
  data() {
    return {
      recommends:[],
      getDiscList:[
        {songName: '灵儿响叮当', picUrl:'http://p.qpic.cn/music_cover/fnBKJkkMMr5DoiadmlXsCV7TJK8iafOYU9AibxFXKic86APSJmyf3iakrBg/600?n=1',songDisc:'美国电影协会评选100首电影金曲'},
        {songName: '我的歌单就是这么好',picUrl: 'http://p.qpic.cn/music_cover/5Olm9QQMvPcH2ZbO9nA2zGvRECehwFqHnvBZkicOGbmumpibk7GeiaJbA/600?n=1',songDisc: '直击心灵的灵魂乐：70位歌手代表作'},
        {songName: '野蔷薇', picUrl: 'http://p.qpic.cn/music_cover/gSWEnBJhkxO1raoO4qZgwa3OQh0erWt82XBxUFx1PnoQCncAoGwWqg/600?n=1', songDisc: '钢琴家们指尖上的李斯特'},
        {songName: '。。。', picUrl: 'http://p.qpic.cn/music_cover/ia1BhHY0pBXp25tpaaiaCzRemUbTt2GLgb8bm4dcbEYzRJL8Il1qh7Gg/600?n=1', songDisc: '传统器乐：丝竹谱响的江南风光'},
        {songName: '叶洛洛',picUrl: 'http://p.qpic.cn/music_cover/NaYDCjF6oFDyCBFMbYpoK5w85FGBTyzt2cOVVraXOBU2ia2wEeyAsFw/600?n=1',songDisc: '远山长慕，寒鸦声渡 • 慕寒原创'},
         {songName: '陈红鲤',picUrl: 'http://p.qpic.cn/music_cover/nTTGCyhtlCX09THicm2oy2UE3mmVastibXx7DREnSibYbia7VibiaDm96bJA/600?n=1',songDisc: '冷门专区：陈红鲤的情绪收留所'},
        {songName: '褐',picUrl: 'http://p.qpic.cn/music_cover/icmord6PBGdDicuWKPmh9IGOM5B4uUjEbLlEIiaIiarXd4bK5HG3uGacpQ/600?n=1',songDisc: '韩国地下嘻哈实力厂牌1LLIONAIRE'},
        {songName: '乌龙茶',picUrl: 'http://p.qpic.cn/music_cover/nGIvUJ7zJn2Dbb5IezsMbk12VFX1FoI7CibORlkMv7ibmee4sTKbrVfw/600?n=1',songDisc: '心情唔好？食啖甜品，天都光晒！'},
        {songName: '杰少',picUrl: 'http://p.qpic.cn/music_cover/Q6jzKPNCPTc2iczypkicqzaJJicuyJ2Wq7HYXWAlicibzGHwGLS70qHcGXA/600?n=1',songDisc: '国内原创电子精选，冉冉升起的新星'},
      ],
    }
  },
  created() {
    this._getRecommend();
    this._getDiscList();
  },
  methods: {
    _getRecommend() {
        getRecommend().then((res)=>{
          if(res.code == ERR_OK) {
            this.recommends = res.data.slider;
            console.log(res.data.slider)
          }
        })
      },
      _getDiscList() {
        getDiscList().then((res)=>{
            console.log('res:' + JSON.stringify( res));
          if(res.code == ERR_OK) {
          }
        })
      },
      // loadImage() {
      //   this.$refs.scrolls.refresh();
      // }
  },
  components: {
    slider,
    scroll,
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin"

.slider
  overflow:hidden
  .slider-item
    float:left
    img
      width:100%
.recommend
  margin-top:88px
  .songDiscList
    .songDiscList_wrapper
      .title
        color: #ffcd32
        text-align: center
        font-size: 14px
        margin-top: 26px
        margin-bottom: 10px
      ul
       .songDiscList_li
         display:flex
         color: #fff
         padding: 10px 20px
         .list_left_wrapper
            flex:0.4
         .list_right_wrapper
            flex:1.1
            p
              font-size: 14px
              line-height:30px
              &.songDisc
                color: rgba(255,255,255,0.6)
.scroll_wrapper
  height:800px
  margin-top:88px
  .recommend_wrapper
    height: 150px

</style>
