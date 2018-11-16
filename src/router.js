import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Dashboard from './components/Dashboard.vue'
import CreateUser from './components/CreateUser.vue'

Vue.use(Router)

let router = new Router({
  routes: [{
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        guest: true
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/ajouterUtilisateur',
      name: 'CreateUser',
      component: CreateUser,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to, from, next)
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/login',
        params: {
          nextUrl: to.fullPath
        }
      })
    } else {
      let user = JSON.parse(localStorage.getItem('user'))
      if (to.matched.some(record => record.meta.role)) {
        if (user.role === to.meta.role) {
          next()
        } else {
          next({
            name: 'Dashboard'
          })
        }
      } else {
        next()
      }
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem('jwt') == null) {
      next()
    } else {
      next({
        name: 'Dashboard'
      })
    }
  } else {
    next()
  }
})

export default router