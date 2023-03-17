import Vue from "vue"
import Router from "vue-router"
import NProgress from 'nprogress'
import store from './store/index'
import AppHeader from "./components/layouts/AppHeader";
import AppFooter from "./components/layouts/AppFooter";
import Home from "./components/pages/Home.vue";
import SearchResult from "./components/pages/SearchResult.vue";


  const routes = [
    {
      path: "/",
      name: "home",
      components: {
        header: AppHeader,
        default: Home,
        footer: AppFooter
      }
    },
    {
      path: "/search",
      name: "search",
      components: {
        header: AppHeader,
        default: SearchResult,
        footer: AppFooter
      }
    },
    // {
    //   path: "/login",
    //   name: "login",
    //   components: {
    //     header: AppHeader,
    //     default: Login,
    //     footer: AppFooter
    //   }
    // }
  ]

  Vue.use(Router)
NProgress.configure({ showSpinner: false });

const router = new Router({
  linkExactActiveClass: "active",
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    },
    routes // short for `routes: routes`
})

router.beforeResolve((to, from, next) => {
    // If this isn't an initial page load.
    if (to.name) {
        // Start the route progress bar.
        // NProgress.start()
    }
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next()
            return
        }
        next('/login')
    }
    else if (to.matched.some(record => record.meta.hideForAuth)) {
        if (!store.getters.isLoggedIn) {
            next()
            return
        }
        next('/')
    } else {
        next()
    }
})

router.afterEach(() => {
    // to, from
    // Complete the animation of the route progress bar.
    NProgress.done()
})

export default router;
