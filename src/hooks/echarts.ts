import type { Ref } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import {
  markRaw,
  onBeforeMount,
  onMounted,
  shallowRef,
  unref,
  watch,
} from 'vue'
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import type { ComposeOption } from 'echarts/core'
import * as echarts from 'echarts/core'
// 系列类型的定义后缀都为 SeriesOption
import type { BarSeriesOption, PieSeriesOption } from 'echarts/charts'
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart, PieChart } from 'echarts/charts'
// 组件类型的定义后缀都为 ComponentOption
import type {
  DatasetComponentOption,
  GridComponentOption,
  LegendComponentOption,
  TitleComponentOption,
  TooltipComponentOption,
  VisualMapComponentOption,
} from 'echarts/components'
// 引入标题，提示框，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  DatasetComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  TransformComponent,
  VisualMapComponent,
} from 'echarts/components'
// 标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features'
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers'

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type ECOption = ComposeOption<
  | BarSeriesOption
  | PieSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | LegendComponentOption
  | DatasetComponentOption
  | VisualMapComponentOption
>

// 注册必须的组件
echarts.use([
  TitleComponent,
  LegendComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  VisualMapComponent,
  BarChart,
  PieChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
])

export function useChart(
  elRef: Ref<HTMLElement | undefined> | HTMLElement,
  option: Ref<ECOption> | ECOption,
) {
  const chart = shallowRef<echarts.ECharts>()

  const render = (option: Ref<ECOption> | ECOption) => {
    if (!chart.value)
      return
    try {
      chart.value.clear()
      chart.value.setOption(unref(option), { notMerge: true })
    }
    catch (error) {
      console.error('渲染图表时发生错误:', error)
    }
  }

  const init = () => {
    if (chart.value)
      return
    const container = unref(elRef)
    if (!container) {
      console.error('无法找到容器元素')
      return
    }
    try {
      chart.value
        = echarts.getInstanceByDom(container) || markRaw(echarts.init(container))
      render(option)
    }
    catch (error) {
      console.error('初始化图表时发生错误:', error)
    }
  }

  const resize = () => {
    if (chart.value) {
      chart.value.resize({ animation: { duration: 300 } })
    }
  }

  const debounceResize = useDebounceFn(resize, 300, { maxWait: 800 })

  onMounted(() => {
    init()
    window.addEventListener('resize', debounceResize)
  })

  onBeforeMount(() => {
    chart.value?.dispose()
    window.removeEventListener('resize', debounceResize)
  })

  watch(
    () => option,
    (newOption) => {
      render(newOption)
    },
    { deep: true },
  )
}
