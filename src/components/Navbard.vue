<template>
  <div class="barra mb-3">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/homed"><i class="fas fa-home"></i></a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/consultas">Consultas</a>
            </li>
          </ul>
          <div class="d-flex">
            <button class="logout btn btn-danger" @click="logout">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <router-view></router-view>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Home",
  methods: {
    logout() {
      firebase.auth().signOut();
    },
  },
};
</script>

<style scoped>
.barra {
  color: #fff;
  background: #2c3e50;
}
a.router-link-exact-active {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  text-align: left;
}
</style>
