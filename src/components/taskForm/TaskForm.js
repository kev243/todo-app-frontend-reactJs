import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask, getTasks } from "../../feature/task.slice";
import "./taskForm.css";

const TaskForm = () => {
  const [newTask, setNewTask] = useState();
  const dispatch = useDispatch();

  const addTask = (e) => {
    e.preventDefault();

    const data = {
      name: newTask,
      _id: Date.now(),
    };

    if (!newTask) {
      alert("please add a task");
    }
    axios
      .post("https://todo-app-api-p6wq.onrender.com/api/v1", data)
      .then(() => {
        dispatch(createTask(data));
        dispatch(getTasks());
      });
  };

  return (
    <div className="form-container">
      <div className="form-content">
        <form onSubmit={(e) => addTask(e)}>
          <input
            type="text"
            placeholder="Whatsgi do you want to do?"
            onChange={(e) => setNewTask(e.target.value)}
          ></input>
          <input type="submit" value="Add" />
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
