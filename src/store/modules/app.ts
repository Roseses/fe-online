// https://pinia.esm.dev/introduction.html
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return { appid: 0, activeNode: {} }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    setCode(val: number) {
      this.appid = val
    },
    setNode (val: object) {
      this.activeNode = val
    }
  }
})

// You can even use a function (similar to a component setup()) to define a Store for more advanced use cases:
// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//
//   function increment() {
//     count.value++
//   }
//
//   return {count, increment}
// })
