<template>
  <div class="container bg-light p-3">
    <h1 class="h3 mb-3 font-weight-normal">Agendar Cita</h1>
    <hr />
    <form @submit.prevent="guardarCita" class="form-signin">
      <span>Información Básica</span>
      <input
        maxlength="150"
        type="text"
        class="form-control mb-3"
        placeholder="Nombre Completo"
        required
        autofocus
        v-model="cita.nombre"
      />
      <input
        min="0"
        max="120"
        type="number"
        class="form-control mb-3"
        placeholder="Edad"
        required
        v-model="cita.edad"
      />
      <span>Detalles de la Cita</span>
      <input
        type="text"
        class="form-control mb-3"
        placeholder="Asunto"
        required
        v-model="cita.asunto"
      />
      <select
        class="form-control mb-3"
        @change="obtener"
        required
        v-model="cita.area"
      >
        <option disabled value="">Seleccione un área</option>
        <option v-for="val in areas" :key="val">{{ val }}</option>
      </select>
      <select class="form-control mb-3" required v-model="cita.doctor">
        <option disabled value="">Seleccione un Doctor</option>
        <option v-for="val in arrayDoctores" :key="val.id">{{
          val.nombre
        }}</option>
      </select>
      <input
        class="form-control mb-3"
        type="date"
        required
        v-model="cita.fecha"
      />
      <select class="form-control mb-3" required v-model="cita.hora">
        <option disabled value="">Seleccione un horario</option>
        <option v-for="val in horarios" :key="val">{{ val }}</option>
      </select>
      <button
        type="submit"
        class="form-control btn btn-success"
        value="Aceptar"
      >
        Aceptar
      </button>
    </form>
  </div>
  <div class="container alert alert-success mt-3" v-if="estadoAgregar">
    <span>Se ha agendado la cita correctamente!</span>
  </div>
  <div class="container alert alert-danger mt-3" v-if="estadoErrorFirebase">
    <span>Hubo un error!</span>
  </div>
  <div class="container alert alert-danger mt-3" v-if="estadoErrorExistencia">
    <span>Medico no disponible en ese horario!</span>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  created() {
    firebase
      .firestore()
      .collection("Citas")
      .onSnapshot((coleccion) => {
        this.arrayTotal = [];
        coleccion.forEach((doc) => {
          this.arrayTotal.push({
            id: doc.id,
            doctor: doc.data().doctor,
            fecha: doc.data().fecha,
            hora: doc.data().hora,
          });
        });
      });
  },
  methods: {
    obtener() {
      firebase
        .firestore()
        .collection("Doctores")
        .where("categoria", "==", this.cita.area)
        .onSnapshot((coleccion) => {
          this.arrayDoctores = [];
          coleccion.forEach((doc) => {
            this.arrayDoctores.push({
              id: doc.id,
              nombre: doc.data().nombre,
              categoria: doc.data().categoria,
            });
          });
        });
    },
    guardarCita() {
      let existe = false;
      for (let i = 0; i < this.arrayTotal.length; i++) {
        if (
          this.arrayTotal[i].doctor == this.cita.doctor &&
          this.arrayTotal[i].fecha == this.cita.fecha &&
          this.arrayTotal[i].hora == this.cita.hora
        ) {
          existe = true;
          break;
        }
      }
      if (!existe) {
        firebase
          .firestore()
          .collection("Citas")
          .add(this.cita)
          .then(() => {
            this.estadoAgregar = true;
            setTimeout(() => {
              this.estadoAgregar = false;
              this.$router.replace("/misconsultas");
            }, 2000);
          })
          .catch(() => {
            this.estadoErrorFirebase = true;
            setTimeout(() => {
              this.estadoErrorFirebase = false;
            }, 2000);
          });
      } else {
        this.estadoErrorExistencia = true;
        setTimeout(() => {
          this.estadoErrorExistencia = false;
        }, 2000);
      }
    },
  },
  data() {
    return {
      horarios: [
        "8:00 hrs",
        "9:00 hrs",
        "10:00 hrs",
        "11:00 hrs",
        "12:00 hrs",
        "13:00 hrs",
        "14:00 hrs",
        "15:00 hrs",
        "16:00 hrs",
        "17:00 hrs",
        "18:00 hrs",
        "19:00 hrs",
      ],
      areas: [
        "ANESTESIOLOGÍA",
        "CARDIOLOGÍA",
        "CUIDADOS INTENSIVOS",
        "DIGESTIVO",
        "HEMATOLOGÍA",
        "MEDICINA INTERNA",
        "NEFROLOGÍA",
        "NEUMOLOGÍA",
        "ONCOLOGÍA",
        "PEDIATRÍA/NEONATOLOGÍA",
        "REHABILITACIÓN",
        "CIRUGÍA GENERAL Y DIGESTIVA",
        "CIRUGÍA ORTOPÉDICA Y TRAUMATOLOGÍA",
        "DERMATOLOGÍA",
        "GINECOLOGÍA Y OBSTETRICIA",
        "OFTALMOLOGÍA",
        "OTORRINOLARIONGOLOGÍA",
        "UROLOGÍA",
        "LABORATORIOS CLÍNICOS",
        "RADIODIAGNÓSTICO",
        "MEDICINA PREVENTIVA",
        "FARMACIA",
      ],
      arrayDoctores: [],
      cita: {
        correo: firebase.auth().currentUser.email,
        nombre: "",
        edad: "",
        asunto: "",
        area: "",
        doctor: "",
        fecha: "",
        hora: "",
      },
      estadoAgregar: false,
      estadoErrorFirebase: false,
      estadoErrorExistencia: false,
      arrayTotal: [],
    };
  },
};
</script>

<style scoped>
.bg-light {
  color: black;
}
</style>
