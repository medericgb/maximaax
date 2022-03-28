<template>
  <header class="bg-green-400 p-5">
    <ul class="flex">
      <li
        v-for="item in navigation"
        :key="item.slug"
        @click="onClick(item.slug)"
        class="" 
      >
        <NuxtLink :to="item.slug">
          {{ item.title }}
        </NuxtLink>
      </li>
    </ul>
  </header>
</template>

<script setup>
const { navigation, onClick } = useNavigation()
</script>