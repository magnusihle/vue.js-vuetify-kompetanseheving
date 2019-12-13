import Vue from "vue";
import VueRouter from "vue-router";
import MinSide from "../views/MinSide/Home.vue";
import KursAdministrasjon from "../views/KursAdministrasjon/Home.vue";

Vue.use(VueRouter);

const routes = [
  /*
   *       Arbeidsflate
   */

  /*  

  {
    path: "/flate"
    name: "arbeidsflate"
    component: () => import("")
  }

  */

  /*
   *       Administrasjon
   */

  /*  

  {
    path: "/adm"
    name: "administrasjon"
    component: () => import("")
  }

  */

  /*
   *       Kursadministrasjon
   */

  {
    path: "/kursadm",
    component: KursAdministrasjon
  },
  {
    path: "/kursadm/studplan",
    name: "kursAdministrasjon.studieplan"
  },
  {
    path: "/kursadm/ny",
    name: "kursAdministrasjon.nyStudieplan",
    component: () => import("../views/KursAdministrasjon/NyStudieplan.vue")
  },


  /*
   *       Min Side
   */

  {
    path: "/minside",
    component: MinSide
  },
  {
    path: "/minside/profile",
    name: "minSide.profile",
    component: () => import("../views/MinSide/Profile.vue")
  },
  {
    path: "/minside/documents",
    name: "minSide.documents",
    component: () => import("../views/MinSide/Documents.vue")
  }

  /*
  *       Modal components routing: 

  {
    ....
    childer: [
      path: /minside/modal,
      component ... 
    ]
  }

  */

];

const router = new VueRouter({
  routes
});

export default router;
