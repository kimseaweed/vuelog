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
        // /detail/뒤에 아무 문자든 붙으면 DetailPage 컴포넌트를 보여달라는 의미. 
        // id는 변수명이다. /:변수명1/:변수명2로 여러 파라미터를 설정할 수 있다.
        // id*로 별을 붙인 경우에는 파라미터가 횟수 상관없이 붙은것을 말한다.
        // 변수명(정규식)을 사용하여 특정 문자일 경우에만 작동하도록 할 수 있다.
        path : "/detail/:id",
        component : DetailPage,
        children : [
            {   
                //children에서 path를 설정할 땐 /는 빼준다. /는 홈페이지주소 바로 다음을 의미하기 때문
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
        // 404페이지를 이와같이 만들수도 있다. 
        // 위에있을수록 우선권을 가지므로 위의 경로를 제외한 모든 path가 해당된다.
        // 메인페이지를 연결하거나 404컴포넌트를 따로 만들수도 있다.
        path : "/:anything(.*)",
        component : HomePage,
    },
];

const router = createRouter({
    history : createWebHistory(),
    routes
});


export default router;