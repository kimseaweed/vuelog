<template>
  <div class="text-center py-5" v-for="(post,i) in posts" :key="i">
    <!-- 상세페이지로 이동하기 위해 @click, router-link등을 사용할 수 있다. -->
    <!-- @click="$router.push('경로')" -->
    <h3 @click="$router.push(`/detail/${i}`)">{{ post.title }}</h3>
    <p>{{ post.date }}</p>
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