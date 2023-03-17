<template>
  <div id="app">
    <router-view name="header"></router-view>
    <main>
      <router-view />
    </main>
    <router-view name="footer"></router-view>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit&display=swap');
@import 'https://fonts.googleapis.com/icon?family=Material+Icons';
@import "nprogress/nprogress.css";
@import "sweetalert2/dist/sweetalert2.min.css";
@import "cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css";

html,
body {
  font-family: "Outfit";
}

#app {
  font-family: "Outfit";
}
</style>
<script>
// import Vue from " vue"
// export default {
//   created() {
//     this.unwatch = this.$store.watch(
//       (state, getters) => getters.notification,
//       (newValue, oldValue) => {
//         if (newValue.status === 'success') {
//           Vue.prototype.$toast.success({
//             title: "Success",
//             message: newValue.message,
//             delay: 0
//           });
//         }
//         if (newValue.status === 'error') {
//           Vue.prototype.$toast.error({
//             title: "Error",
//             message: newValue.message,
//             delay: 0
//           });
//         }
//       },
//     );
//   },
//   beforeDestroy() {
//     this.unwatch();
//   }
// }
</script>
