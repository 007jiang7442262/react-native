
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '测试类组件用法',
  data:0
}

export const counterSlice = createSlice({
  name: 'dataTest',
  initialState,
  reducers: {
    setValue: (state) => {
      // Redux Toolkit允许我们在reducers中直接写改变state的逻辑.
      // 由于使用了Immer库,所以并没有真的改变state
      // 而是检测到“草稿state”的更改并根据这些更改生成一个全新的不可变state
      state.value += 1
    },
    setData: (number) => {
      state.data  = number
    },
  },
})

// reducer方法的每一个case都会生成一个Action
export const { setValue,setData  } = counterSlice.actions

export default counterSlice.reducer