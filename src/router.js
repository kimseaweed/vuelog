import { createRouter, createWebHistory } from "vue-router";


import ListPage from "./components/ListPage.vue";
import HomePage from "./components/HomePage.vue";
import DetailPage from "./components/DetailPage.vue";
import AuthorProfile from "./components/AuthorProfile.vue";
import CommentView from "./components/CommentView.vue";


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
        path : "/detail/:id",
        component : DetailPage,
        children : [
            {   
                path : "author",
                component : AuthorProfile,
            },
            {
                path : "comment",
                component : CommentView,
            },
        ]
    },
    {
        path : "/:anything(.*)",
        component : HomePage,
    },
];

const router = createRouter({
    history : createWebHistory(),
    routes
});


export default router;