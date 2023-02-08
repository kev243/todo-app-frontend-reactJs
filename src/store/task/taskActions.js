import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getTasksSuccess } from "./task.slice";

export const getTasks = createAsyncThunk("getTasks", async (_, thumkAPI) => {
  axios
    .get("https://todo-app-api-p6wq.onrender.com/api/v1")
    .then((res) => thumkAPI.dispatch(getTasksSuccess(res.data)));
});
