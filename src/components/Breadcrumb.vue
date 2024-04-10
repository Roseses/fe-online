<script setup lang="ts">
interface Crumb {
  label: string,
  value?: string
}

interface Props {
  crumbList: Crumb[],
  separator?: string
}

// @ts-ignore
const props = withDefaults(defineProps<Props>(), {
  crumbList: [],
  separator: '/'
})
</script>

<template>
  <div>
    <el-breadcrumb :separator="props.separator">
      <el-breadcrumb-item
        v-for="item in props.crumbList"
      >
        {{ item.label }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
