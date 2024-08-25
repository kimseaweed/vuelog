<template>
  <div class="text-center py-5" v-for="(post,i) in posts" :key="i">
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