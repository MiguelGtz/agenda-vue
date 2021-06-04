<template>
  <Navbar />
  <div class="contacto p-5">
    <div class="container bg-light p-3">
      <h1 class="h3 mb-3 font-weight-normal">Contacto</h1>
      <hr />
      <form @submit.prevent="guardarMensaje" class="form-signin">
        <input
          maxlength="150"
          type="text"
          class="form-control mb-3"
          placeholder="Nombre Completo"
          required
          autofocus
          v-model="mensaje.nombre"
        />
        <input
          type="text"
          class="form-control mb-3"
          placeholder="Asunto"
          required
          v-model="mensaje.asunto"
        />
        <textarea
          class="form-control mb-3"
          placeholder="Mensaje"
          rows="10"
          required
          v-model="mensaje.texto"
        ></textarea>
        <button
          type="submit"
          class="form-control btn btn-success"
          value="Aceptar"
        >
          Enviar
        </button>
      </form>
    </div>
    <div class="container alert alert-success mt-3" v-if="estadoMensaje">
      <span>Se ha enviado el mensaje correctamente!</span>
    </div>
    <div class="container alert alert-danger mt-3" v-if="estadoErrorMensaje">
      <span>Hubo un error al enviar el mensaje!</span>
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
  data() {
    return {
      mensaje: {
        nombre: "",
        asunto: "",
        texto: "",
      },
      estadoMensaje: false,
      estadoErrorMensaje: false,
    };
  },
  methods: {
    guardarMensaje() {
      firebase
        .firestore()
        .collection("Mensajes")
        .add(this.mensaje)
        .then(() => {
          this.estadoMensaje = true;
          setTimeout(() => {
            this.estadoMensaje = false;
            this.mensaje.nombre = "";
            this.mensaje.asunto = "";
            this.mensaje.texto = "";
          }, 2000);
        })
        .catch(() => {
          this.estadoErrorMensaje = true;
          setTimeout(() => {
            this.estadoErrorMensaje = false;
          }, 2000);
        });
    },
  },
};
</script>

<style scoped>
.contacto {
  background-image: url("../assets/background-contacto.jpg");
  background-size: cover;
  height: 100vh;
  color: black;
}
textarea {
  resize: none;
}
</style>
