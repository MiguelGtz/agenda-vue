<template>
  <div class="login">
    <div class="container">
      <div
        class="row justify-content-center align-items-center"
        style="height:100vh"
      >
        <div class="col-4">
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="cargar">
                <img src="../assets/logo.png" width="100" height="100" />
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control mb-2 mt-2"
                    placeholder="Correo"
                    v-model="usuario.email"
                  />
                  <input
                    type="password"
                    class="form-control mb-2 mt-2"
                    placeholder="Contraseña"
                    v-model="usuario.password"
                  />
                  <button type="submit" class="btn btn-success mt-2">
                    Iniciar Sesion
                  </button>
                </div>
              </form>
              <div class="m-2">
                <span>Aun no tienes cuenta? </span>
                <a href="/signup">Registrarse</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      usuario: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    cargar() {
      firebase.auth().signInWithEmailAndPassword(this.usuario.email, this.usuario.password);
    },
  },
};
</script>

<style scoped>
.login {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  background: #2c3e50;
}
</style>
