import Vue from 'vue';
import Router from 'vue-router';
import Recommend from '../components/recommend/recommend';
import Singer from '../components/singer/singer';
import Rank from '../components/rank/rank';
import Search from '../components/search/search';
import SingerDetail from '../components/singerDetail/singerDetail';

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Recommend
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer,
      children:[{
        path: ":id",
        component: SingerDetail
      }]
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    },


  ]
})
