<template>

<nav class="navbar navbar-expand-lg bg-body-tertiary py-3 px-5">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">Vuelog</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/list">List</router-link>
          <!-- a태그를 router-link로, herf를 to로 바꾸면 컴포넌트를 갈아치울수 있다. -->
        </li>
        <!-- <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> -->
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<!-- 라우터뷰로 교체했으므로 컴포넌트 태그는 필요없음
하단의 임포트와 컴포넌트 등록도 함께 삭제 -->
<!-- <ListPage :posts="posts"/> -->

<router-view :posts="posts"/>

</template>

<script>
import posts from './assets/posts';
// import ListPage from './components/ListPage.vue';

export default {
  name: 'App',
  data(){
    return{
      posts : posts,
    }
  },
  components: {
    // ListPage,
  }
}
</script>

<style>

</style>
