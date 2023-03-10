import { createSlice } from "@reduxjs/toolkit";

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
    editTask: (state, { payload }) => {
      state.tasksData = state.tasksData.map((task) => {
        if (task._id === payload[1]) {
          return {
            ...task,
            completed: payload[0],
          };
        } else {
          return task;
        }
      });
    },
    deleteTask: (state, { payload }) => {
      state.tasksData = state.tasksData.filter((task) => task._id !== payload);
    },
  },
});

export const { getTasksSuccess, createTask, editTask, deleteTask } =
  taskSlice.actions;
export default taskSlice.reducer;
