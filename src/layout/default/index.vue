<template>
  <div class="container">
    <div class="header">
      Header
    </div>
    <div class="left">
      Left
    </div>
    <div class="main">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-rows: 84px 1fr;
  grid-template-columns: 200px 1fr;
  width: 100vw;
  height: 100vh;

  .left {
    grid-row: 1 / span 2;
    background-color: lightgreen;
  }

  .header {
    background-color: lightblue;
  }

  .main {
    background-color: #f5f5f5;
  }
}
</style>
