import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login";
import Signup from "../views/Signup";
import Home from "../views/Home";
import Consultas from "../views/Consultas";
import MisConsultas from "../views/MisConsultas";
import Contacto from "../views/Contacto";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/consultas",
    name: "Consultas",
    component: Consultas,
  },
  {
    path: "/misconsultas",
    name: "MisConsultas",
    component: MisConsultas,
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: Contacto,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
