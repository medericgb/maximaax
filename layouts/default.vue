<template>
  <div>
    <Header />
    <slot />
  </div>
</template>

<script setup>
const { navigation } = useNavigation()
</script>