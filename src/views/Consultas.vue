<template>
  <Navbar />
  <div class="contenedor p-5">
    <NewConsulta />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import NewConsulta from "../components/NewConsulta";

export default {
  components: {
    Navbar,
    NewConsulta,
  },
};
</script>

<style scoped>
.contenedor {
  height: 100vh;
  background-image: url("../assets/background-nueva-consulta.jpg");
  background-size: cover;
}
</style>
