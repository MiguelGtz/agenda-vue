<template>
  <div class="barra">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/home"
          ><i class="fas fa-home"></i
        ></router-link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/consultas"
                >Nueva Consulta</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/misconsultas"
                >Mis Consultas</router-link
              >
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
