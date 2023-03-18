<template>
  <div>
    <div>
      <search :querystring="query" :searchBook="searchBook"></search>
      <div v-if="books.length > 0" class="text-center"><small>Found {{ count }} records</small></div>
    </div>
    <div v-if="books.length > 0">
      <books :items="books"></books>
      <pagination :links="links" :fetchBooks="fetchBooks" :current_page="current_page"></pagination>
    </div>
    <div class="text-center" v-else>
      <img :src="require(`@/assets/images/Flip-Flop.gif`)">
    </div>
  </div>
</template>
  
<script>
import { mapActions } from 'vuex';
export default {
  mounted() {
    if (this.query) {
      this.searchBooks({ query: this.query, per_page: this.per_page, current_page: 1, callback: this.loadBooks });
    }
  },
  methods: {
    ...mapActions(['searchBooks']),
    loadBooks(res) {
      this.books = res.data,
        this.count = res.meta.total,
        this.current_page = res.meta.current_page,
        this.links = res.meta.links
    },
    searchBook(query) {
      this.query = query
      this.$router.replace({ name: 'search', query: { ...this.$route.query, q: query } })
      this.searchBooks({ query: query, per_page: this.per_page, current_page: 1, callback: this.loadBooks });
    },
    fetchBooks(current_page) {
      this.searchBooks({ query: this.query, per_page: this.per_page, current_page: current_page, callback: this.loadBooks });
    },
  },
  data() {
    return {
      query: this.$route.query.q,
      per_page: 24,
      current_page: 1,
      links: [],
      books: [],
      count: 0
    };
  },
};
</script>
<style scoped>
.carousel-caption {
  bottom: 80px;
}

.carousel-caption h3 {
  font-size: 40px;
}

.carousel-caption p {
  font-size: 20px;
}

img {
  width: 80%;
}
</style>