<template>
  <div class="signup">
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
                    Registrarse
                  </button>
                </div>
              </form>
              <div class="m-2">
                <span>Ya tienes cuenta? </span>
                <a href="/">Inicia Sesion</a>
              </div>
              <div class="alert alert-success" v-if="confirmacion">
                <span>Se ha registrado correctamente!</span>
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
      confirmacion: false,
    };
  },
  methods: {
    cargar() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.usuario.email, this.usuario.password);
      this.confirmacion = true;
      setTimeout(() => {
        this.confirmacion = false;
      }, 1000);
    },
  },
};
</script>

<style scoped>
.signup {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  background: #2c3e50;
}
</style>
