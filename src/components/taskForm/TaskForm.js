import axios from "axios";
import React, { useState } from "react";
import "./taskForm.css";

const TaskForm = () => {
  const [newTask, setNewTask] = useState();

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask) {
      alert("please add a task");
    }
    axios
      .post("http://localhost:5000/api/v1", {
        name: newTask,
      })
      .then((res) => {
        console.log(res);
      });
    setNewTask("");
  };

  return (
    <div className="form-container">
      <div className="form-content">
        <form onSubmit={(e) => addTask(e)}>
          <input
            type="text"
            placeholder="What do you want to do?"
            onChange={(e) => setNewTask(e.target.value)}
          ></input>
          <input type="submit" value="Add" />
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
