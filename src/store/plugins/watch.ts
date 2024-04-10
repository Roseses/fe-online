import { Pinia, PiniaPluginContext } from 'pinia'
export default (pinia: Pinia) => {
  pinia.use((state: PiniaPluginContext) => {
    state.store.$subscribe(() => {
      // 在存储变化的时候执行
      console.log('store变化了', state.store.$state)
    })
    state.store.$onAction(() => {
      // 在 action 的时候执行

    })
  })
}

