<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

function handleClick() {
  ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}

const date = ref('')

const { count } = storeToRefs(useCounterStore())
function handleChange(value: number | undefined) {
  count.value = value
}
</script>

<template>
  <div class="wrapper">
    <h1>Home</h1>
    <div>
      <el-button>
        Default
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
    <div>
      <i-ep-user />
      <el-icon :size="50" color="#1976D2">
        <i-ep-edit />
      </el-icon>
    </div>
    <el-input-number v-model="count" :min="1" :max="10" @change="handleChange" />
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
