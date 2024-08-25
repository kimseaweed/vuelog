<template>
  <div class="text-center py-5" v-for="(post,i) in posts" :key="i">
    <router-link to="/" >{{ post.title }}</router-link>
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