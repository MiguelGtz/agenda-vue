<template>
  <Navbard />
  <div class="homed">
    <div class="alert alert-light" role="alert">
      <h1 class="bienvenida">Bienvenido, {{ usuario }}</h1>
    </div>
  </div>
</template>

<script>
import Navbard from "../components/Navbard";
import firebase from "firebase";

export default {
  components: {
    Navbard,
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
  background-size: 100%;
  background-position: 50% 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bienvenida {
  font-size: 100px;
}
</style>
