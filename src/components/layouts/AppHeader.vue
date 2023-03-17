<template>
  <nav class="navbar navbar-expand-lg">
  <span class="navbar-brand" href="#">Bookstore</span>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" id="search" type="search" placeholder="Search">
      <button id="search-btn" class="btn my-2 my-sm-0" type="submit">Search</button>
    </form>
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
  #search:focus{
    outline:none
  }
  #search-btn{
    border-color: #f97141;
    color: #f97141;
    background-color: #1a1a1a;
  }
  #search-btn:hover{
    background-color: #f97141;
    color: #fff;
  }
</style>