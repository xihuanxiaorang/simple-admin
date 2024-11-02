<script lang="ts" setup>
import NavBar from './components/NavBar/index.vue'
</script>

<template>
  <div
    class="w-screen h-screen grid grid-rows-[50px_1fr] grid-cols-[210px_1fr]"
  >
    <NavBar />
    <div class="bg-[lightgreen] row-start-1 row-span-2">
      Left
    </div>
    <div class="bg-[#f5f5f5]">
      <RouterView />
    </div>
  </div>
</template>
