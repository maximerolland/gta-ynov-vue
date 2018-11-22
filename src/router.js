import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Dashboard from './components/common/Dashboard.vue'
import GestionUtilisateur from './components/respoEquipe/GestionUtilisateur.vue'
import Profile from './components/common/Profile.vue'
import Absence from './components/common/Absence.vue'

Vue.use(Router)

let router = new Router({
  routes: [{
      path: "/",
      redirect: "/login"
    },
    {
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
      path: '/gestionUtilisateur',
      name: 'GestionUtilisateur',
      component: GestionUtilisateur,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/absence',
      name: 'Absence',
      component: Absence,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
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