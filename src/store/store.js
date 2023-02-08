import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./task/task.slice";

export default configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
