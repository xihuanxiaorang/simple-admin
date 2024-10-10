<template>
  <div class="w-screen h-screen grid grid-rows-[84px_1fr] grid-cols-[200px_1fr]">
    <div class="bg-[lightblue]">
      Header
    </div>
    <div class="bg-[lightgreen] row-start-1 row-span-2">
      Left
    </div>
    <div class="bg-[#f5f5f5]">
      <RouterView />
    </div>
  </div>
</template>
