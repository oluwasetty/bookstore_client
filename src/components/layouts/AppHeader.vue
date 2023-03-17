<template>
  <nav class="navbar navbar-expand-lg">
  <span class="navbar-brand">Bookstore</span>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"><i class="material-icons">menu</i></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
      </li>
    </ul>
      <router-link id="search-btn" class="btn my-2 my-sm-0" to="/search">Search</router-link>
      <router-link id="search-btn" class="btn my-2 my-sm-0" to="/login">Login</router-link>
  </div>
</nav>
</template>
<style scoped>
  .navbar{
    background-color: #1a1a1a;
    color: #f97141;
  }
  .navbar a{
    color: #fff;
  }
  .navbar-toggler, .navbar-toggler:focus{
    border-color: #f97141;
  }
  .navbar-toggler-icon{
    color: #f97141;
  }
  #search:focus{
    outline:none
  }
  #search-btn{
    border-color: #f97141;
    color: #f97141;
    background-color: #1a1a1a;
    margin: 5px;
  }
  #search-btn:hover{
    background-color: #f97141;
    color: #fff;
  }
</style>