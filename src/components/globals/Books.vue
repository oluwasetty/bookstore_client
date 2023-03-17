<template>
    <div id="large-th" class="mt-4">
        <div v-if="items.length > 0" class="container">
            <div class="choose">
                <a href="#large-th"><i class="material-icons">grid_view</i></a>
                <a href="#list-th"><i class="material-icons">view_list</i></a>
            </div>
            <div id="list-th">
                <div class="row">
                    <div v-for="(book, i) in items" :key="i" class="col-xl-3 col-lg-4 col-md-6 mt-4">
                        <div class="book read">
                            <div class="cover">
                                <img :src="book.image">
                            </div>
                            <div class="description">
                                <p class="title">{{ book.title }}<br>
                                    <span class="author">{{ book.author }}</span><br>
                                    <small>{{ format_date(book.published) }}</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import moment from "moment";
export default {
    name: "books",
    props: {
        items: {
            type: Array,
            description: "Books"
        }
    },
    methods: {
        format_date(date) {
            return moment(new Date(date)).format("MMM D, Y")
        }
    }
}
</script>
<style scoped>
.choose {
    width: 100%;
    height: 40px;
    text-align: center;
}

.choose a{
    color: #000;
}

/******************************************
Book stuff
*******************************************/

.book {
    display: inline-block;
    width: 230px;
    height: 350px;
    box-shadow: 0 0 20px #aaa;
    margin: 25px;
    padding: 10px 10px 0 10px;
    vertical-align: top;
    transition: height 1s;
}

.cover {
    border: 2px solid gray;
    height: 65%;
    overflow: hidden;
}

.cover img {
    width: 100%;
}

.book p {
    margin-top: 12px;
    font-size: 16px;
}

.book .author {
    font-size: 13px;
}

@media (max-width: 941px) {
    .container {
        max-width: 700px;
    }

    .book {
        margin: 49px;
    }
}

@media (max-width: 730px) {
    .book {
        display: block;
        margin: 0 auto;
        margin-top: 50px;
    }

    .cover {}
}

/*********************************
other
**********************************/

h1 {
    color: gray;
    text-align: center;
    font-size: 50px;
    margin-bottom: -3px;
}

/**********************************
display change
***********************************/
/*book height smaller, cover opacity, move text onto cover and star too
animate it */
#list-th:target .book {
    height: 100px;
    width: 260px;
    padding: 10px;
    margin: 25px auto 25px auto;
}

#list-th:target .cover {
    width: 240px;
    height: 80px;
}

#list-th:target img {
    opacity: .1;
}

#list-th:target p {
    margin-top: -78px;
    margin-left: 20px;
}

/* remove button? */
#large-th:target .book {
    height: 350px;
}
</style>