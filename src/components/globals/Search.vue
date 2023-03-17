<template>
    <form v-on:submit="searchBook">
        <div id="search-container" title="Search for the books that you want.">
            <div class="input-group mb-2 mr-sm-2" id="searchbox">
                <div class="input-group-prepend">
                    <div class="input-group-text"><i class="material-icons">search</i></div>
                </div>
                <input type="text" class="form-control" id="inlineform" placeholder="Search">
            </div>
        </div>
    </form>
</template>
  
<script>
export default {
    name: "search",
    props: {
        query: {
            type: String,
            description: "Query string"
        }
    },
    data() {
        return {
            // query: "",
        }
    },
    methods: {
        searchBook(query) {
            this.sliding = true
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

#searchbox .input-group-prepend {
    margin: 15px 10px 6px;
}
</style>