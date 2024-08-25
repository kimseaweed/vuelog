import { createRouter, createWebHistory } from "vue-router";


import ListPage from "./components/ListPage.vue";
import HomePage from "./components/HomePage.vue";
import DetailPage from "./components/DetailPage.vue";


const routes = [

    {
        path : "/",
        component : HomePage,
    },
    {
        path : "/list",
        component : ListPage,
    },
    {
        // /detail/뒤에 아무 문자든 붙으면 DetailPage 컴포넌트를 보여달라는 의미. id는 변수명이다
        path : "/detail/:id",
        component : DetailPage,
    },
];

const router = createRouter({
    history : createWebHistory(),
    routes
});


export default router;