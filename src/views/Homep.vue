<template>
  <Navbarp />
  <div class="homep">
    <div class="alert alert-light" role="alert">
      <h1 class="bienvenida">Bienvenido, {{ usuario }}</h1>
    </div>
  </div>
</template>

<script>
import Navbarp from "../components/Navbarp";
import firebase from "firebase";

export default {
  components: {
    Navbarp,
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
.homep {
  background-image: url("../assets/background-homep.png");
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
