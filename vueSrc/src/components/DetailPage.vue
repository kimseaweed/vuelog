<template>
  <div class="text-center mt-5 pt-5">
    <h3>{{ posts[$route.params.id].title }}</h3>
    <span>{{ posts[$route.params.id].number +1 }}번째 글 </span>
    <span class="text-body-secondary">{{ posts[$route.params.id].date }}</span>
    <p class="mt-5">{{ posts[$route.params.id].content }}</p>
  </div>
  <div class="text-center">
    <router-link :to="{ path : `/detail/${$route.params.id}/author` }">author</router-link> <br>
    <router-link :to="{ path : `/detail/${$route.params.id}/comment` }">comment</router-link> <br>
    <router-view/>
  </div>
</template>

<script>
export default {
    props:{
        posts : Array,
    }
}
</script>

<style>

</style>