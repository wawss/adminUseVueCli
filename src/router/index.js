import Vue from 'vue'
import Router from 'vue-router'
import images from '@/pages/images.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/images',
      name: 'images',
      component: images
    }
  ]
})
