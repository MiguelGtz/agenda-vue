<template>
  <router-view />
</template>

<script>
import { useRouter, useRoute } from "vue-router";
import firebase from "firebase";

export default {
  created() {
    const router = useRouter();
    const route = useRoute();

    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        if (route.path != "/" && route.path != "/signup") {
          router.replace("/");
        }
      } else if (
        route.path != "/home" &&
        route.path != "/consultas" &&
        route.path != "/misconsultas" &&
        route.path != "/contacto"
      ) {
        router.replace("/home");
      }
    });
  },
};
</script>

<style>
body {
  background: #2c3e50;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background: #2c3e50;
}
</style>
