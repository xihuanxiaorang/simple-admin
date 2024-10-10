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

const icons = import.meta.glob('../../assets/icons/*.svg', { eager: true })
const iconNames = Object.keys(icons).map(key => key.replace(/.*\/([^/]+)\.svg$/, '$1'))
</script>

<template>
  <div class="w-full h-full p-[10px]">
    <h1 class="text-5xl font-bold text-orange-600 mt-[10px]">
      Home
    </h1>
    <div class="mt-[10px]">
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
      class="mt-[10px]"
      type="date"
      placeholder="选择日期"
    />
    <div class="mt-[10px] flex items-center">
      <i-ep-user />
      <el-icon :size="50" color="#1976D2">
        <i-ep-edit />
      </el-icon>
    </div>
    <el-input-number v-model="count" class="mt-[10px]" :min="1" :max="10" @change="handleChange" />
    <div class="mt-[10px] text-6xl">
      <svg-icon v-for="icon in iconNames" :key="icon" :icon-class="icon" />
    </div>
  </div>
</template>
