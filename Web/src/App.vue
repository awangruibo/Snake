<template>
  <Navbar />
  <router-view></router-view>
</template>

<script>
import Navbar from "./components/NavBar.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
// import $ from 'jquery'

export default {
  components: {
    Navbar,
  },
  setup() {

    // $.ajax({
    //   url: "http://127.0.0.1:3000/user/account/token/",
    //   type: "post",
    //   data: {
    //     username: "wrb",
    //     password: "pw",
    //   },
    //   success(resp) {
    //     console.log(resp);
    //   },
    //   error(resp) {
    //     console.log(resp);
    //   },
    // });

    // $.ajax({
    //   url: "http://127.0.0.1:3000/user/account/info/",
    //   type: "get",
    //   headers: {
    //     Authorization:
    //       "Bearer " +
    //       "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJhZDRlZDJmZTEwMzI0NDAwYTdlMGExODg5ZmEyYzEyOCIsInN1YiI6IjEiLCJpc3MiOiJzZyIsImlhdCI6MTY2MTI0NTMzNywiZXhwIjoxNjYyNDU0OTM3fQ.d85aaDwyPzwiABSOGh9m3Q6u6WaItlgFSp6sPmbKNW4",
    //   },
    //   success(resp) {
    //     console.log(resp);
    //   },
    //   error(resp) {
    //     console.log(resp);
    //   },
    // });

    // $.ajax({
    //   url: "http://127.0.0.1:3000/user/account/token/",
    //   type: "post",
    //   data: {
    //     username: "wrb1",
    //     password: "pwrb1",
    //     confirmedPassword: "pwrb1",
    //   },
    //   success(resp) {
    //     console.log(resp);
    //   },
    //   error(resp) {
    //     console.log(resp);
    //   },
    // });
  },
  
};
</script>


<style>
body {
  background-image: url(@/assets/images/background.png);
  background-size: cover;
}
</style>
