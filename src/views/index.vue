<script lang="ts" setup>
import HelloWorld from "@/components/HelloWorld.vue";
import Head from "@/components/Head.vue";
import { menu } from '@/config/local.json'

import { ref } from 'vue'

const activeName = ref('first')

const handleClick = () => {
  // 处理点击事件
}
</script>

<template>
  <div class="layout">
    <div>
      <Head :menu="menu"/>
    </div>
    <div class="layout__main">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-rows: 60px auto;
  width: 100%;
  height: 100vh;
}
.layout__main {
}
</style>
