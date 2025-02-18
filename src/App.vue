<script setup>
import TopNavigation from './components/TopNavigation.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <TopNavigation />
  <div><RouterView /></div>
</template>

<style scoped></style>
