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

    firebase
      .firestore()
      .collection("Doctores")
      .onSnapshot((doc) => {
        doc.forEach((dato) => {
          this.arrayDoc.push(dato.data().email);
        });
      });

    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        if (route.path != "/" && route.path != "/signup") {
          router.replace("/");
        }
      } else {
        const email = firebase.auth().currentUser.email;
        if (this.arrayDoc.includes(email)) {
          if (route.path != "/homed" && route.path != "/consultas") {
            router.replace("/homed");
          }
        } else {
          if (route.path != "/homep" && route.path != "/citas") {
            router.replace("/homep");
          }
        }
      }
    });
  },
  data() {
    return {
      arrayDoc: [],
    };
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
