<template>
    <div class=" container mt-4">
        <div class="mb-4">
            <h3>Edit Book</h3>
            <router-link id="search-btn" class="btn my-2 my-sm-0" to="/list-book">Go to List</router-link>
        </div>
        <form @submit.prevent="saveBook">
            <div class="form-group">
                <label>Title:</label>
                <input required v-model="book.title" type="text" class="form-control" placeholder="Enter Title">
            </div>
            <div class="form-group">
                <label>Author:</label>
                <input required v-model="book.author" type="text" class="form-control" placeholder="Enter Author">
            </div>
            <div class="form-group">
                <label>Genre:</label>
                <input required v-model="book.genre" type="text" class="form-control" placeholder="Enter Genre">
            </div>
            <div class="form-group">
                <label>ISBN:</label>
                <input required v-model="book.isbn" type="text" class="form-control" placeholder="Enter ISBN">
            </div>
            <div class="form-group">
                <label>Publisher:</label>
                <input required v-model="book.publisher" type="text" class="form-control" placeholder="Enter Publisher">
            </div>
            <div class="form-group">
                <label>Published Date:</label>
                <input required v-model="book.published" type="date" class="form-control" placeholder="Enter Published Date">
            </div>
            <div class="form-group">
                <label>Description:</label>
                <textarea v-model="book.description" type="text" rows="5" class="form-control" placeholder="Enter Description"></textarea>
            </div>
            <button type="submit" class="btn my-2 my-sm-0 btn-dark">
                Submit
            </button>
        </form>
    </div>
</template>
<script>
import moment from "moment";
import { mapActions } from 'vuex';
export default {
    mounted() {
      this.book_id = this.$route.params.id
        this.$store.dispatch("fetchBookDetails", { id: this.book_id, callback: this.loadBook });
    },
    methods: {
        ...mapActions(['updateBook']),
        saveBook() {
            this.updateBook({ id: this.book_id, book: this.book, callback: this.onSaved });
        },
        onSaved() {
            // this.book = {
            //     title: "",
            //     author: "",
            //     isbn: "",
            //     genre: "",
            //     publisher: "",
            //     published: "",
            //     description: ""
            // }
        },
        loadBook(res) {
            this.book = {...res.data, published: moment(new Date(res.data.published)).format("YYYY-MM-DD")}
        },
    },
    data() {
        return {
            book_id: "",
            book: {
                title: "",
                author: "",
                isbn: "",
                genre: "",
                publisher: "",
                published: "",
                description: ""
            }
        };
    },
};
</script>
<style scoped>
#search:focus {
    outline: none
}

#search-btn {
    border-color: #f97141;
    color: #f97141;
    background-color: #fff;
}

#search-btn:hover {
    background-color: #f97141;
    color: #fff;
}
</style>