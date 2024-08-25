//router 라이브러리에서 안내하는 초기셋팅 코드. 홈페이지에서도 확인할 수 있다.

import { createRouter, createWebHistory } from "vue-router";
// from '경로'를 적으면 폴더안의 js를, 라이브러리 이름을 적으면 라이브러리를 불러온다.
// createRouter -> 라우터 생성 함수

import ListPage from "./components/ListPage.vue";
import HomePage from "./components/HomePage.vue";


const routes = [
    // http://홈페이지주소/경로 로 접속하면, component를 표시하도록 연결하는것. 
    // component를 import한 뒤 component : 에 적어주면 된다.
    // 여러 페이지를 설정하고싶으면 블럭을 여러개 만들면 된다. 

    // {
    //     path : "/경로",
    //     component : import 해온 컴포넌트,
    // },

    {
        path : "/",
        component : HomePage,
    },
    {
        path : "/list",
        component : ListPage,
    },
];

const router = createRouter({
    history : createWebHistory(),
    routes
});


export default router;
//설정 완료된 router를 export한다