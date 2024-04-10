<script setup lang="ts">
import { TableProp } from '../common/data'

// @ts-ignore
const props = withDefaults(defineProps<TableProp>(), {
  data: [],
  columns: []
})

/**
 *  @description 多选变化回调
 */
const handleSelectionChange = (val) => {
  console.log(val, '多选')
}

</script>


<template>
  <el-row>
    <el-col>
      <slot></slot>
    </el-col>
    <el-col>
      <el-table
          ref="multipleTableRef"
          :data="props.data"
          style="width: 100%"
          @selection-change="handleSelectionChange"
      >
        <el-table-column
          v-for="item in props.columns"
          :type="item.type || 'default'"
          :property="item.prop"
          :label="item.label"
          :sortable="item.sortable || false"
        />
      </el-table>
    </el-col>
  </el-row>
</template>
