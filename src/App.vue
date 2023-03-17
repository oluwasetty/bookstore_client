<template>
  <div id="app">
      <router-view name="header"></router-view>
      <main>
          <fade-transition origin="center" mode="out-in" :duration="250">
              <router-view/>
          </fade-transition>
      </main>
      <router-view name="footer"></router-view>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit&display=swap');
@import 'https://fonts.googleapis.com/icon?family=Material+Icons';
html, body {
  font-family: "Outfit";
}

#app {
  font-family: "Outfit";
}
</style>
<script>
</script>
