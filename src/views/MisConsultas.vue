<template>
  <Navbar />
  <div class="contenedor p-5">
    <div class="container bg-light p-3" v-if="!estadoDelete && !estadoEdit">
      <h1 class="h3 mb-3 font-weight-normal">Historial de Citas</h1>
      <hr />
      <table class="table">
        <thead v-if="arrayCitas.length != 0">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Asunto</th>
            <th scope="col">Doctor</th>
            <th scope="col">Fecha</th>
            <th scope="col">Hora</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cita in arrayCitas" :key="cita.id">
            <td>{{ cita.nombre }}</td>
            <td>{{ cita.asunto }}</td>
            <td>{{ cita.doctor }}</td>
            <td>{{ cita.fecha }}</td>
            <td>{{ cita.hora }}</td>
            <td>
              <button
                class="btn btn-primary mx-1"
                @click="(estadoEdit = true), (idDocumento = cita.id)"
              >
                <i class="fas fa-edit"></i>
              </button>
              <button
                class="btn btn-danger mx-1"
                @click="(estadoDelete = true), (idDocumento = cita.id)"
              >
                <i class="fas fa-trash-alt"></i>
              </button>
            </td>
          </tr>
          <tr class="h4" v-if="arrayCitas.length == 0">
            <span>No hay citas!</span>
          </tr>
        </tbody>
      </table>
    </div>
    <EditConsulta :idDocumento="idDocumento" v-if="estadoEdit" />
    <div class="container alert alert-dark" v-if="estadoDelete">
      <div><h5>¿Está seguro que desea eliminarlo?</h5></div>
      <button
        class="btn btn-danger mx-1"
        @click="deleteCita(idDocumento), (estadoDelete = false)"
      >
        Eliminar
      </button>
      <button class="btn btn-primary mx-1" @click="estadoDelete = false">
        Cancelar
      </button>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import EditConsulta from "../components/EditConsulta";
import firebase from "firebase";

export default {
  components: {
    Navbar,
    EditConsulta,
  },
  created() {
    firebase
      .firestore()
      .collection("Citas")
      .where("correo", "==", firebase.auth().currentUser.email)
      .onSnapshot((coleccion) => {
        this.arrayCitas = [];
        coleccion.forEach((doc) => {
          this.arrayCitas.push({
            id: doc.id,
            nombre: doc.data().nombre,
            edad: doc.data().edad,
            asunto: doc.data().asunto,
            area: doc.data().area,
            doctor: doc.data().doctor,
            fecha: doc.data().fecha,
            hora: doc.data().hora,
          });
        });
      });
  },
  methods: {
    deleteCita(id) {
      firebase
        .firestore()
        .collection("Citas")
        .doc(id)
        .delete();
    },
  },
  data() {
    return {
      arrayCitas: [],
      idDocumento: "",
      estadoDelete: false,
      estadoEdit: false,
    };
  },
};
</script>

<style scoped>
.bg-light {
  color: black;
}
.contenedor {
  height: 100vh;
  background-image: url("../assets/background-mis-consultas.jpg");
  background-size: cover;
}
</style>
