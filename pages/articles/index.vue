<template>
  <div>
    <h1>Liste des articles</h1>
    <ul v-for="article in data" :key="article.id">
      <NuxtLink :to="`/articles/${article.id}`">
        {{ article.title }}
      </NuxtLink>
    </ul>
  </div>
</template>

<script setup>
// const { data } = await useAsyncData('articles', () => $fetch('/api/articles'))
const { data } = await useFetch('/api/articles')
</script>