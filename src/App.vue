<template>
  <router-view />
</template>

<script>
import { onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import firebase from "firebase";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          if (route.path != "/" && route.path != "/signup"){
            router.replace("/");
          }
        } else if (route.path == "/" || route.path == "/signup") {
          router.replace("/home");
        }
      });
    });
  }
}
</script>

<style>
body{
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
