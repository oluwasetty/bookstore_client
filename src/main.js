import Vue from "vue";
import App from './App.vue'
import router from "./router"
import store from './store/index'
import Global from './components/global'
import Transitions from 'vue2-transitions'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
// import 'popper.js/dist/popper.js';
// import 'bootstrap/dist/js/bootstrap.min.js'

Vue.use(Transitions)
Vue.use(Global)

new Vue({
    render: h => h(App),
    router,
    store
  }).$mount("#app");
