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
                    required
                  />
                  <input
                    type="password"
                    class="form-control mb-2 mt-2"
                    placeholder="Contraseña"
                    v-model="usuario.password"
                    required
                  />
                  <button type="submit" class="btn mt-2">
                    Iniciar Sesion
                  </button>
                </div>
              </form>
              <div class="m-2">
                <span>Aun no tienes cuenta? </span>
                <router-link to="/signup">Registrarse</router-link>
              </div>
              <div class="alert alert-danger" v-if="infoError">
                <span>El correo o contraseña no es correcto!</span>
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
      infoError: false,
    };
  },
  methods: {
    cargar() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.usuario.email, this.usuario.password)
        .catch(() => {
          this.infoError = true;
          setTimeout(() => {
            this.infoError = false;
          }, 1000);
        });
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
  background-image: url("../assets/background-login.png");
  background-size: 100%;
}
.card {
  border: 3px solid #d2ac93;
  border-radius: 5px;
  box-shadow: 0 0 20px #d2ac93;
}
.btn {
  background: #d2ac93;
  color: white;
}
</style>
