import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../feature/task.slice";

export default configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
