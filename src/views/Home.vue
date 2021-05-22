<template>
  <Navbar />
  <div class="homed">
    <div class="alert alert-light" role="alert">
      <h1 class="bienvenida">Bienvenido, {{ usuario }}</h1>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import firebase from "firebase";

export default {
  components: {
    Navbar,
  },
  created() {
    const user = firebase.auth().currentUser;
    if (user) {
      this.usuario = user.email.split("@")[0];
    }
  },
  data() {
    return {
      usuario: "",
    };
  },
};
</script>

<style scoped>
.homed {
  background-image: url("../assets/background-homed.png");
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bienvenida {
  font-size: 100px;
}
</style>
