import Vue from 'vue'
import Router from 'vue-router'
// import Recommend from '@/view/recommend/recommend'
// import Rank from '@/view/rank/rank'
// import Search from '@/view/search/search'
// import Singer from '@/view/singer/singer'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/Recommend'
    },
    {
      path: '/recommend',
      component: resolve => require(['@/view/recommend/recommend.vue'], resolve),
      meta: {
        title: '音乐首页'
      }
    }, {
      path: '/rank',
      component: resolve => require(['@/view/rank/rank.vue'], resolve),
      meta: {
        title: '音乐排行榜'
      }
    },
    {
      path: '/search',
      component: resolve => require(['@/view/search/search.vue'], resolve),
      meta: {
        title: '音乐搜索'
      }
    }, {
      path: '/singer',
      component: resolve => require(['@/view/singer/singer.vue'], resolve),
      meta: {
        title: '音乐歌手'
      }
    }
  ]
})
