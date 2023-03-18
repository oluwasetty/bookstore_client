<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <img :src="book.image" alt="Book cover image" class="img-fluid">
      </div>
      <div class="col-md-8">
        <h3>{{ book.title }}</h3>
        <h4>{{ book.author }}</h4>
        <p>Genre: <span>{{ book.genre }}</span></p>
        <p>Publisher: <span>{{ book.publisher }}</span></p>
        <p>Publication Date: <span>{{ format_date(book.published) }}</span></p>
        <p>ISBN: <span>{{ book.isbn }}</span></p>
        <p>Description: <span>{{ book.description }}</span> </p>
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
  color: #555;
}

p {
  margin: 0;
  font-size: 16px;
  text-align: justify;
}
p span{
  color: #555;
}
</style>