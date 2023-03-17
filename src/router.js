import Vue from "vue"
import Router from "vue-router"
import NProgress from 'nprogress'
import store from './store/index'
import AppHeader from "./components/layouts/AppHeader";
import AppFooter from "./components/layouts/AppFooter";
import Home from "./components/pages/Home.vue";
import SearchResult from "./components/pages/SearchResult.vue";
import BookDetails from "./components/pages/BookDetails.vue";
import Login from "./components/admin/Login.vue";
import AddBook from "./components/admin/AddBook.vue";
import EditBook from "./components/admin/EditBook.vue";
import ListBooks from "./components/admin/ListBooks.vue";


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
    {
      path: "/product/:id",
      name: "product",
      components: {
        header: AppHeader,
        default: BookDetails,
        footer: AppFooter
      }
    },
    {
      path: "/edit-book/:id",
      name: "edit_book",
      components: {
        header: AppHeader,
        default: EditBook,
        footer: AppFooter
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/add-book",
      name: "add_book",
      components: {
        header: AppHeader,
        default: AddBook,
        footer: AppFooter
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/list-book",
      name: "list_book",
      components: {
        header: AppHeader,
        default: ListBooks,
        footer: AppFooter
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      },
      meta: {
        hideAuth: true
      }
    }
  ]

  Vue.use(Router)
NProgress.configure({ showSpinner: true });

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
    else if (to.matched.some(record => record.meta.hideAuth)) {
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
