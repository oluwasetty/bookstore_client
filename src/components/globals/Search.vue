<template>
    <form @submit.prevent="searchBook(query)">
        <div id="search-container" title="Search for the books that you want.">
            <div class="input-group mb-2 mr-sm-2" id="searchbox">
                <div class="input-group-prepend">
                    <div class="input-group-text"><i class="material-icons">search</i></div>
                </div>
                <input v-model="query" type="text" class="form-control" id="inlineform" placeholder="Search">
            </div>
        </div>
    </form>
</template>
  
<script>
export default {
    name: "search",
    props: {
        querystring: {
            type: String,
            description: "Query string"
        },
        searchBook: {
            type: Function,
            description: "Search book"
        }
    },
    data() {
        return {
            query: this.$props.querystring,
        }
    }
}
</script>
<style scoped>
#search-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

#searchbox {
    border: 1px solid #999;
    border-radius: 10px;
    margin: 30px 0;
    width: 600px;
}

#searchbox .form-control {
    background-color: transparent;
    border: none;
    height: 50px;
    color: #000;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}

#searchbox .input-group-text {
    background-color: transparent;
    border: none;
    margin-top: 8px;
}
</style>