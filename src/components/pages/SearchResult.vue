<template>
    <div>
    <div>
        <search query="search"></search>
    </div>
    <div>
        <books v-if="books.length > 0" :items="books"></books>
        <div class="text-center" v-else>
                <img height="500" :src="require(`@/assets/images/Flip-Flop.gif`)" alt="First slide">
        </div>
    </div>
</div>
</template>
  
<script>
export default {
  mounted() {
    this.$store.dispatch("searchBooks", {per_page: this.per_page, current_page:this.current_page, callback: this.loadBooks});
  },
  methods: {
    loadBooks(res) {
        this.books = res.data
    },
  },
  data() {
    return {
        per_page: 12,
        current_page: 1,
      books: []
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