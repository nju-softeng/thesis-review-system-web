import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    fetchLoading: false,
    userInfo: {
      userName: "default",
      userId: -1,
    },
  },
  reducers: {
    fetchUserInfo(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    setLoading(state, action) {
      state.fetchLoading = action.payload;
    },
  },
});

export const { fetchUserInfo, setLoading } = userSlice.actions;

export const fetchUserInfoAsync = (userId) => (dispatch) => {
  setTimeout(() => {
    dispatch(fetchUserInfo(userId));
  }, 1500);
};

// Selector，作为 useSelector 读取数据的函数参数
export const fetchLoadingSelector = (state) => state.user.fetchLoading;

export default userSlice.reducer;

// console.log(userSlice);
