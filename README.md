# vuelog
코딩애플 vue3 강좌 part2 vuelog

# 6강
1. router설정엔 html5mode와 hash모드가 있음
    * html5모드 사용시 url요청이 서버에 먼저 들어가서 서버가 해당 페이지를 보여주려고 하면 의도치 않은 연결이 될 수 있음.
    * hash모드 사용시 url에 #이 붙은채로 시작하게 되는데, #이붙은건 서버에게 전달되지 않으므로 vue router혼자 처리할수 있게된다.
2. router 기능 중 특정 url을 들어가기 전에 코드를 실행하는 navigation guard 기능이 있다.
    router.js의 component 아래에 beforeEnter : (목적지페이지, 출발페이지) => { return 목적지페이지.fullPaht } 를 작성하여 다른 url로 날릴수있다.
3. 여러개의 route에 같은 navigation guard를 추가할 수 있다.
    rounter.beforeEach( (to,from)=> { 페이지 변경 전 실행할 코드 })
4. vue컴포넌트 안에서도 navigation guard를 사용할 수 있다. 라이프사이클훅처럼 스크립트 태그 안에 beforeRouteEnter(){} 혹은 beforeRouteUpdate(){}로 작성하면 된다. 파라미터는 목적지, 출발지를 쓴다. ajax를 사용하게 된다면 이런 방식을 사용하면 된다.
