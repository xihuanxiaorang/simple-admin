<script lang="ts" setup>
import type { ECOption } from '@/hooks/echarts'
import { useCounterStore } from '@/stores/modules/counter'

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
const iconNames = Object.keys(icons).map(key =>
  key.replace(/.*\/([^/]+)\.svg$/, '$1'),
)

const chartOptions = ref<ECOption>({
  title: {
    text: 'ECharts 入门示例',
  },
  tooltip: {},
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
})

const chartOptions2 = ref<ECOption>({
  title: {
    text: 'Referer of a Website',
    subtext: 'Fake Data',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
})
</script>

<template>
  <div class="w-full h-full p-[10px]">
    <h1 class="text-5xl font-bold text-orange-600 mt-[10px]">
      Home
    </h1>
    <div class="mt-[10px]">
      <el-button> Default</el-button>
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
      placeholder="选择日期"
      type="date"
    />
    <div class="mt-[10px] flex items-center">
      <i-icon-park-outline-user />
      <el-icon :size="50" color="#1976D2">
        <i-icon-park-outline-edit-two />
      </el-icon>
    </div>
    <el-input-number
      v-model="count"
      :max="10"
      :min="1"
      class="mt-[10px]"
      @change="handleChange"
    />
    <div class="mt-[10px] text-6xl">
      <svg-icon v-for="icon in iconNames" :key="icon" :icon-class="icon" />
    </div>
    <div class="mt-5 rounded-md">
      <section class="grid md:grid-cols-2 gap-3">
        <el-card shadow="hover">
          <template #header>
            <div>
              <span>用户数</span>
            </div>
          </template>
          <Chart :options="chartOptions" class="!h-72" />
        </el-card>

        <el-card shadow="hover">
          <template #header>
            <div>
              <span>销售额</span>
            </div>
          </template>
          <Chart :options="chartOptions2" class="!h-72" />
        </el-card>
      </section>
    </div>
  </div>
</template>
