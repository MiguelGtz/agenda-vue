<template>
  <Navbar />
  <div class="container bg-light p-3">
    <h1 class="h3 mb-3 font-weight-normal">Historial de Citas</h1>
    <table class="table">
      <thead>
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
            <button class="btn btn-primary mx-1" @click="editCita(cita.id)">
              <i class="fas fa-edit"></i>
            </button>
            <button class="btn btn-danger mx-1" @click="deleteCita(cita.id)">
              <i class="fas fa-trash-alt"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import firebase from "firebase";

export default {
  components: {
    Navbar,
  },
  created() {
    firebase
      .firestore()
      .collection("Citas")
      .where("correo","==",firebase.auth().currentUser.email)
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
  data() {
    return {
      arrayCitas: [],
    };
  },
};
</script>

<style scoped>
.bg-light {
  color: black;
}
</style>
