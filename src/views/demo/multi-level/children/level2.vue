<script lang="ts" setup></script>

<template>
  <div class="p-[30px]">
    <el-alert :closable="false" title="菜单二级" type="success">
      <router-view />
    </el-alert>
  </div>
</template>

<style lang="scss" scoped></style>
