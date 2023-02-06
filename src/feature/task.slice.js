import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTasks = createAsyncThunk("getTasks", async (_, thumkAPI) => {
  axios
    .get("http://localhost:5000/api/v1")
    .then((res) => thumkAPI.dispatch(getTasksSuccess(res.data)));
});

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasksData: [],
  },
  reducers: {
    getTasksSuccess: (state, { payload }) => {
      state.tasksData = payload;
    },
    createTask: (state, { payload }) => {
      state.tasksData.push(payload);
    },
  },
});

export const { getTasksSuccess, createTask } = taskSlice.actions;
export default taskSlice.reducer;
