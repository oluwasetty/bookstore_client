<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <img :src="book.image" alt="Book cover image" class="img-fluid">
      </div>
      <div class="col-md-8">
        <h2>{{ book.title }}</h2>
        <h4>{{ book.author }}</h4>
        <p>Genre: {{ book.genre }}</p>
        <p>Publisher: {{ book.publisher }}</p>
        <p>Publication Date: {{ format_date(book.published) }}</p>
        <p>ISBN: {{ book.isbn }}</p>
        <p>Description: {{ book.description }} </p>
      </div>
    </div>
  </div>
</template>
  
<script>
import moment from "moment";
import { mapActions } from 'vuex';
export default {
  mounted() {
    let book_id = this.$route.params.id
    this.fetchBookDetails({ id: book_id, callback: this.loadBook });
  },
  data() {
    return {
      book: {}
    };
  },
  methods: {
    ...mapActions(['fetchBookDetails']),
    format_date(date) {
      return moment(new Date(date)).format("MMM D, Y")
    },
    loadBook(res) {
      this.book = res.data
    },
  }
};
</script>
<style scoped>
.container {
  max-width: 800px;
  margin: 100px auto;
}

img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
}

h2 {
  margin-top: 0;
}

h4 {
  margin-bottom: 10px;
}

p {
  margin: 0;
  font-size: 18px;
}
</style>