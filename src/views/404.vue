<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

const goMain = () => {
  router.replace('/main/one')
}
</script>

<template>
  <el-result title="404" sub-title="Sorry, page error">
    <template #extra>
      <el-button type="primary" @click="goMain">回到首页</el-button>
    </template>
  </el-result>
</template>
