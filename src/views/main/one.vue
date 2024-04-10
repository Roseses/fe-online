<script setup lang="ts">
import OrgTree from "@/views/main/components/OrgTree.vue";
import UserTable from "@/views/main/components/UserTable.vue";
import { ref, watch, computed } from 'vue'
import Breadcrumb from "@/components/Breadcrumb.vue";
import { useAppStore } from "@/store";
import { storeToRefs } from "pinia";
import request from '@/api/user';
import { Columns } from './common/data';
import Search from './components/Search.vue';

const appStore = useAppStore()
const { activeNode } = storeToRefs(appStore)

const list = ref([])
const input = ref('')
const cols: Columns[] = [
  {
    type: 'selection'
  },
  {
    label: '姓名',
    prop: 'name',
    sortable: true
  },
  {
    label: '用户名',
    prop: 'account',
    sortable: true
  }
]

/**
 * @description 发送请求
 */
const effect = async (val) => {
  if (!val.id) {
    list.value = []
    return
  }
  try {
    const res = await request.query({ orgId: val.id })
    list.value = res
  } catch (e) {
    // ...报错处理
  }
}

watch(activeNode, effect, { deep: true })

/**
 * @description 过滤
 */
const filter = (val) => {
  input.value = val
}

const filterList = computed(()=> {
  return input.value ? list.value.filter(item => item.name.includes(input.value)) : list.value
})

</script>

<template>
  <div class="one">
    <div class="one__first">
      <OrgTree></OrgTree>
    </div>
    <div>
      <Breadcrumb class="one__bread" :crumbList="(activeNode.crumb || [])"></Breadcrumb>
      <Search class="one__search" @debounce="filter"></Search>
      <UserTable class="one__table" :columns="cols" :data="filterList"></UserTable>
    </div>
  </div>
</template>

<style scoped lang="less" src="./one.less">
</style>
