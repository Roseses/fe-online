<script setup lang="ts">
import { reactive } from "vue";
import debounce from 'lodash/debounce'
import { Search } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
const emit = defineEmits(['debounce'])
const form = reactive({
  name: ''
})

/***
 * @description 防抖
 */
const search = debounce(() => {
  emit('debounce', form.name)
}, 500)
</script>

<template>
  <el-form inline :model="form">
    <el-form-item>
      <el-input
          v-model="form.name"
          @input="search"
          placeholder="请输入内容"
          :prefix-icon="Search"
      ></el-input>
    </el-form-item>
  </el-form>
</template>
