<template>
  <div class="singer">
    <listview @selectSinger="onSelectSinger" :singer="singer" :shortcutList="shortcutList">
    </listview>
    <router-view></router-view>
  </div>
</template>
<script>
import {getSingerList} from 'api/singer.js';
import Singer from 'common/js/singer.js';
import listview from '../listview/listview.vue';

const HOT_NAME = '热门';
const HOT_LEN = 10;
  export default {
    data() {
      return {
        singer: [],
        shortcutList: [],
      }
    },
    created() {
      this._getSingerList();

    },
    mounted() {

    },
    methods: {
      _getSingerList() {
        getSingerList().then((res)=>{

          this.singer = this._normalSingerList(res.data.list);

        })
      },
      _normalSingerList(list) {
        let shortcut = [];
        let map = {
          hot: {
            title: HOT_NAME,
            items: []
          }
        };
       list.forEach((item,index)=>{
          if(index < HOT_LEN) {
            map.hot.items.push(new Singer({
              id:item.Fsinger_mid,
              name:item.Fsinger_name
            }));
          }
           const key = item.Findex;

              if(!map[key]) {
                map[key] = {
                  title: key,
                  items: []
                  }
                  if(key.match(/[a-zA-Z]/)) {
                    shortcut.push(key);
                 }
               }


           map[key].items.push(new Singer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
           }))
       });
       this.shortcutList = shortcut.sort((a,b)=>{
            return a.charCodeAt(0) - b.charCodeAt(0);
           })
           this.shortcutList.unshift('热')

       let ret = [];
       let hot = [];
       for( let key in map ) {

        if(map[key].title.match(/[a-zA-Z]/)) {
          ret.push(map[key]);
        }
        else if(map[key].title == HOT_NAME){
          hot.push(map[key]);
        }
       }
       ret.sort((a, b) => {
         return a.title.charCodeAt(0) - b.title.charCodeAt(0)
       })
        // console.log('hot:'+JSON.stringify(ret))
       // console.log('hot:'+this.shortcutList)
        return hot.concat(ret);
      },
      onSelectSinger(item) {
        this.$router.push({
          path:`/singer/${item.id}`,params: {id:item.id}
        })
        console.log(this.$router)

      }
    },
    components: {
      listview,
    },
  }

</script>
<style lang="stylus" rel="stylesheet/stylus">

.singer
  margin-top: 88px
  color: #fff
</style>


