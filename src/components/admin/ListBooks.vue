<template>
    <div class="table-responsive container-fluid mt-4">
        <div class="mb-4">
            <h3>List of Books</h3>
            <router-link id="search-btn" class="btn my-2 my-sm-0" to="/add-book">Add New</router-link>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">S/No</th>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Publisher</th>
                    <th scope="col">ISBN</th>
                    <th scope="col">Published</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(book, i) in books" :key="i">
                    <th scope="row">{{ ((current_page - 1) * per_page) + i + 1 }}</th>
                    <td>{{ book.title }}</td>
                    <td>{{ book.author }}</td>
                    <td>{{ book.genre }}</td>
                    <td>{{ book.publisher }}</td>
                    <td>{{ book.isbn }}</td>
                    <td>{{ format_date(book.published) }}</td>
                    <td>
                        <router-link class="text-info" :to="`/edit-book/${book.id}`">Edit</router-link>&nbsp;|
                        <a @click.prevent="deleteOnebook(book.id)" class="text-danger" href="!#">Delete</a>
                    </td>
                </tr>
            </tbody>
        </table>
        <pagination :links="links" :fetchBooks="fetchPagedBooks" :current_page="current_page"></pagination>
    </div>
</template>
<script>
const Swal = require('sweetalert2')
import moment from "moment";
import { mapActions } from 'vuex';
export default {
    mounted() {
        this.fetchBooks({ current_page: 1, per_page: this.per_page, callback: this.loadBooks });
    },
    methods: {
        ...mapActions(['fetchBooks','deleteBook']),
        loadBooks(res) {
            this.books = res.data,
                this.count = res.meta.total,
                this.current_page = res.meta.current_page,
                this.links = res.meta.links
        },
        format_date(date) {
            return moment(new Date(date)).format("MMM D, Y")
        },
        fetchPagedBooks(current_page) {
            this.fetchBooks({ current_page: current_page, per_page: this.per_page, callback: this.loadBooks });
        },
        deleteOnebook(id) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.deleteBook({ id, callback: this.reIndexBooks })
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })

        },
        reIndexBooks(id) {
            this.books = this.books.filter(book => book.id !== id);
        },
    },
    data() {
        return {
            query: this.$route.query.q,
            per_page: 20,
            current_page: 1,
            links: [],
            books: [],
            count: 0
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