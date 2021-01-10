import Vue from "vue";
import VueRouter from "../vueRouter/vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

// 路由规则
const routes = [
    // 嵌套路由
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/hash",
        name: "hash",
        props: true,
        component: () =>
            import ("../views/hash.vue")
    }
];

// 创建 router 对象
const router = new VueRouter({
    routes
});

export default router;