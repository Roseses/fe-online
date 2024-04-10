<script lang="ts" setup>
import { ref } from 'vue'

interface Menu {
  label: string,
  value: string
}

interface Props {
  menu: Menu[]
}

// @ts-ignore
const props = withDefaults(defineProps<Props>(), {
  menu: []
})

const activeIndex = ref('/main/one')

/**
 * @description 点击菜单事件
 */
const  handleSelect = (key: string, keyPath: string[]) => {
  // ...
}
</script>

<template>
  <div>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        router
    >
      <el-menu-item
        v-for="item in props.menu"
        :index="item.value"
      >
        {{ item.label}}
      </el-menu-item>
    </el-menu>
  </div>
</template>
