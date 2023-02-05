import React from "react";
import "./App.css";
import TaskForm from "./components/taskForm/TaskForm";

const App = () => {
  return (
    <div className="todo-container">
      <div className="header">
        <h1>Task Manager</h1>
      </div>
      <TaskForm />
      <div className="list-container">
        <div className="task-list">
          <input type={"checkbox"} />
          <label>Dormir avec la climatisation</label>
        </div>

        <div className="task-list">
          <input type={"checkbox"} />
          <label>Dormir avec la climatisation</label>
        </div>
        <div className="task-list">
          <input type={"checkbox"} />
          <label>Dormir avec la climatisation</label>
        </div>
      </div>
    </div>
  );
};

export default App;
