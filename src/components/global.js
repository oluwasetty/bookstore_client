import Search from './globals/Search.vue'
import Books from './globals/Books.vue'
import Pagination from './globals/Pagination.vue'

export default {
    install(Vue) {
      Vue.component(Search.name, Search);
      Vue.component(Books.name, Books);
      Vue.component(Pagination.name, Pagination);
    }
}