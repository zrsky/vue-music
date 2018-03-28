<template>
  <div>
    <!-- <scroll :data="singer" :ref="scroll"> -->
     <div class="listview">
        <ul v-show="singer.length">
          <li v-for="item in singer">
             <h1 class="title">{{item.title}}</h1>
             <ul>
               <li v-for="(value, index) in item.items" @click="selectIndex(value)">
                 <img class="avatar" v-lazy="value.avatar">
                 <span class="singer_name">{{value.name}}</span>
               </li>
             </ul>
          </li>
        </ul>
     </div>
  <!-- </scroll> -->
  <div class="list_shortcut">
    <ul v-show="shortcutList">
      <li v-for="list in shortcutList">
        {{list}}
      </li>
    </ul>
  </div>
  </div>
</template>
<script>
import scroll from 'base/scroll/scroll';
  export default {
    data() {
      return {

      }
    },
    props: {
      singer: {
        type: Array,
        default: null
      },
      shortcutList: {
        type: Array,
        default: null
      }
    },
    mounted() {
      console.log('singer:'+JSON.stringify(this.singer.map))
    },
    methods: {
      selectIndex(item) {
        this.$emit('selectSinger',item);
      }
    },
    components: {
      scroll,
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .listview
    ul
      li
        color: rgba(255,255,255,0.5)
        .title
          height: 30px
          line-height: 30px
          padding-left: 20px
          font-size: 12px
          background: #333
        ul
         li
          list-style:none
          display: flex
          align-items: center
          padding: 20px 0 0 30px
          .avatar
            width: 50px
            height: 50px
            border-radius: 50%
          .singer_name
            margin-left: 20px
            color: rgba(255,255,255,0.5)
            font-size: 14px
.list_shortcut
      position: fixed
      z-index: 30
      right: 0
      top: 56%
      transform: translateY(-50%)
      width: 20px
      padding: 20px 0
      border-radius: 10px
      text-align: center
      background: rgba(0,0,0,0.3)
      font-family: Helvetica
      li
        padding: 3px;
        line-height: 1;
        color: rgba(255,255,255,0.5);
        font-size: 12px;

</style>
