import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "songList", component: () => import("../components/songList.vue")  },
  { path: "/create", name: "createSong", component: () => import("../components/createSong.vue")  },
  { path: "/update/:cancionId", name: "updateSong", component: () => import("../components/updateSong.vue"), meta: { protected: true }, defineProps: { cancionId: Number}  },
]

const router =  createRouter({
    history: createWebHistory(),
    routes: routes,
})

router.beforeEach((to, from, next) => {
  if(to.path != "/create" && to.path != `/update/${to.params.cancionId}` && to.path != "/"){next('/')}
  if (to.matched.some((record) => record.meta.protected)) {
    console.log(to.path);
    if (from.name === "songList") {
      next();
    } else {
      next('/');
    }
  } else {
    next();
  }
});

export default router;