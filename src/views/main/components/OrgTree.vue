<script setup lang="ts">
import request from '@/api/org'
import  { ref } from 'vue'
import { props, Tree } from '../common/data'
import { Plus, CollectionTag } from '@element-plus/icons-vue'
import { useAppStore } from "@/store";

const appStore = useAppStore()
const hasData = ref(true)

/**
 * @description 懒加载请求组织数据
 */
const loadNode  = async (
    node: Node,
    resolve: (data: Tree[]) => void,
    reject: () => void
) => {
  if (node.level === 0) {
    try {
      const result = await request.query()
      hasData.value = result.length > 0
      return resolve(result)
    } catch (e) {
      hasData.value = false
      return reject()
    }
  }
  if (node.level >= 1) {
    setTimeout(() => {
      return resolve(Array(3).fill(0).map((_, index) => {
        return {
          name: `section${index + 1}`,
          leaf: true,
          num: index + 1,
          id: ((Math.random() * 10) + '')
        }
      }))
    }, 1000)
  }
}


let nameList: any[] = []
/**
 * @description 点击节点
 */
const handleNodeClick = (data, NodeData, b, c) => {
  nameList = [{ label: data.name }]
  traverseData(NodeData)
  console.log(nameList)
  appStore.setNode({
    ...data,
    crumb: [...nameList].reverse()
  })
}

function traverseData(obj) {
  // 如果当前对象是null或者对象不存在，返回
  if (obj === null || typeof obj !== 'object' || obj === undefined) {
    return
  }

  // 检查对象中是否有 data 属性
  if (obj.hasOwnProperty('parent')) {
    // 打印或处理data属性
    obj.parent?.data?.name && nameList.push({ label: obj.parent?.data?.name})
    obj.parent?.parent && traverseData(obj.parent?.parent);
  }

}


</script>

<template>
  <div>
    <template
      v-if="hasData"
    >
      <div class="org__flex_between">
        <div>
          部门
        </div>
        <div>
          <el-icon><Plus /></el-icon>
        </div>
      </div>
      <el-tree
          class="org__tree"
          :props="props"
          :load="loadNode"
          lazy
          @node-click="handleNodeClick"
      >
        <template #default="{ node, data }">
        <span class="custom-tree-node">
          <span>
            <el-icon><CollectionTag /></el-icon>
          </span>
          <span style="margin-left: 6px">{{ node.label }}</span>
          <span> · </span>
          <span >{{ data.num || 0 }}</span>
        </span>
        </template>
      </el-tree>
    </template>
    <template
      v-else
    >
      <el-empty description="无数据" />
    </template>
  </div>
</template>


<style scoped>
.org__flex_between {
  display: flex;
  justify-content: space-between;
  height: 53px;
  line-height: 53px;
  padding: 0 16px;
  border-bottom: 1px solid var(--el-menu-border-color);
  color: var(--el-text-color-regular);
  cursor: text;
  font-weight: normal;
  font-size: 14px;
}
.org__tree {
  padding: 12px;
}
</style>
