import Vue from "vue";
import VueRouter from "vue-router";
import login from "../component/login.vue";
import profile from "../component/Profile.vue";
Vue.use(VueRouter);
const userisLoggedIn = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  } else {
    return false;
  }
};
const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/login", component: login },
    { path: "/profile", component: profile, meta: { needsAuth: true } }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.needsAuth) {
    let data = userisLoggedIn();
    console.log(data);
    if (data) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
