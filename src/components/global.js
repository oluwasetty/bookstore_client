import Search from './globals/Search.vue'
import Books from './globals/Books.vue'

export default {
    install(Vue) {
      Vue.component(Search.name, Search);
      Vue.component(Books.name, Books);
    }
}