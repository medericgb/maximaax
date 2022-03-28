<template>
  <div>
    <h1>Article {{ id }}</h1>
  </div>
</template>

<script setup>
const route = useRoute();
const id = ref(null);

id.value = route.params.id;
</script>
