import Vue from "vue";
import Router from "vue-router";

import Home from "@/components/Home";
import Tasks from "@/components/Tasks";
import Education from "@/components/Education";
Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
          },
          {
            path: "/tasks",
            name: "Tasks",
            component: Tasks,
          },

          {
            path: "/education",
            name: "Education",
            component: Education,
          },
          
          

    ]
});

export default router;