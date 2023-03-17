<template>
    <div>
        <div class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" :src="require(`@/assets/images/header-bg.png`)" alt="First slide">
                    <div class="carousel-caption d-none d-md-block">
                        <h3>Welcome to our book store</h3>
                        <p>Search for the books that you want.</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <search :searchBook="searchBook"></search>
        </div>
        <div v-if="books.length > 0" class="text-center my-4">
            <h3>Recently Added Books </h3>
        </div>
        <div>
            <books :items="books"></books>
        </div>
    </div>
</template>
  
<script>
export default {
    mounted() {
        this.$store.dispatch("fetchBooks", { per_page: this.per_page, current_page: this.current_page, callback: this.loadBooks });
    },
    methods: {
        loadBooks(res) {
            this.books = res.data
        },
        searchBook(query) {
            this.$router.push({ name: 'search', query: { q: query } })
        }
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