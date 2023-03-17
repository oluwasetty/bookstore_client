<template>
  <div>
    <div>
      <search :querystring="query" :searchBook="searchBook"></search>
      <div class="text-center"><small>Found {{ count }} records</small></div>
    </div>
    <div v-if="books.length > 0">
      <books :items="books"></books>
      <pagination :links="links" :fetchBooks="fetchBooks" :current_page="current_page"></pagination>
    </div>
    <div class="text-center" v-else>
      <img height="500" :src="require(`@/assets/images/Flip-Flop.gif`)" alt="First slide">
    </div>
  </div>
</template>
  
<script>
export default {
  mounted() {
    this.$store.dispatch("searchBooks", { query: this.query, per_page: this.per_page, current_page: 1, callback: this.loadBooks });
  },
  methods: {
    loadBooks(res) {
      this.books = res.data,
        this.count = res.meta.total,
        this.current_page = res.meta.current_page,
        this.links = res.meta.links
    },
    searchBook(query) {
      this.query = query
      this.$router.replace({ name: 'search', query: { ...this.$route.query, q: query } })
      this.$store.dispatch("searchBooks", { query: query, per_page: this.per_page, current_page: 1, callback: this.loadBooks });
    },
    fetchBooks(current_page) {
      this.$store.dispatch("searchBooks", { query: this.query, per_page: this.per_page, current_page: current_page, callback: this.loadBooks });
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
</style>