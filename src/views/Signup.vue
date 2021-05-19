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
                    Registrarse
                  </button>
                </div>
              </form>
              <div class="m-2">
                <span>Ya tienes cuenta? </span>
                <router-link to="/">Inicia Sesion</router-link>
              </div>
              <div class="alert alert-danger" v-if="infoPassword">
                <span>La contraseña debe de tener al menos 6 caracteres</span>
              </div>
              <div class="alert alert-danger" v-if="infoEmail">
                <span>Este correo ya ha sido registrado!</span>
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
      infoPassword: false,
      infoEmail: false,
    };
  },
  methods: {
    cargar() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          this.usuario.email,
          this.usuario.password
        )
        .catch((error) => {
          if (error.code == "auth/weak-password") {
            this.infoPassword = true;
            setTimeout(() => {
              this.infoPassword = false;
            }, 2000);
          } else {
            this.infoEmail = true;
            setTimeout(() => {
              this.infoEmail = false;
            }, 2000);
          }
        });
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
  background-image: url("../assets/background-signup.png");
  background-size: 100%;
  background-position: 50% 50%;
}
.card {
  border: 3px solid #a2464a;
  border-radius: 5px;
  box-shadow: 0 0 20px #a2464a;
}
.btn {
  background: #a2464a;
  color: white;
}
</style>
