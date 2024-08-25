<template>
  <div class="text-center py-5" v-for="post in posts" :key="post">
    <h5>{{ post.title }}</h5>
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