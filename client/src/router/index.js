import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Laws from '@/components/Laws'
import NewLaw from '@/components/NewLaw'
import EditLaw from '@/components/EditLaw'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/laws',
      name: 'Laws',
      component: Laws
    },
    {
      path: '/laws/new',
      name: 'NewLaw',
      component: NewLaw
    },
    {
      path: '/laws/:id',
      name: 'EditLaw',
      component: EditLaw
    }
  ]
})
