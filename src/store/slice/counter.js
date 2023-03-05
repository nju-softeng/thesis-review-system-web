import { createSlice } from "@reduxjs/toolkit";

// 借助 createSlice 创建 reducer、action
const CounterSlice = createSlice({
  name: "counter", // 生成 Action type 的前缀，例如：counter/increment
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1; // 这里默认通过了 immer 处理，不会修改原 state
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
  },
});

// Action Creator 用于执行返回描述如何更新 state 的 Action
export const { increment, decrement, incrementByAmount, decrementByAmount } =
  CounterSlice.actions;

// 异步 thunk，用于需要在更新数据前异步处理数据的情况
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1500);
};

// Selector，作为 useSelector 读取数据的函数参数
export const counterSelector = (state) => state.counter.value;

// Reducer，真正执行修改 state 的纯函数
export default CounterSlice.reducer;

// console.log(CounterSlice);
