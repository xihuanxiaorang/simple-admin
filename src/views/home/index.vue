<script setup lang="ts">
function handleClick() {
  ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}

const num = ref(1)
const date = ref('')
</script>

<template>
  <div class="wrapper">
    <h1>Home</h1>
    <div>
      <el-button @click="num++">
        {{ num }}
      </el-button>
      <el-button type="primary">
        Primary
      </el-button>
      <el-button type="success" @click="handleClick">
        Success
      </el-button>
      <el-button type="info">
        Info
      </el-button>
      <el-button type="warning">
        Warning
      </el-button>
      <el-button type="danger">
        Danger
      </el-button>
    </div>
    <el-date-picker
      v-model="date"
      type="date"
      placeholder="选择日期"
    />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  padding: 10px;

  > :nth-child(n + 2) {
    margin-top: 10px;
  }
}
</style>
