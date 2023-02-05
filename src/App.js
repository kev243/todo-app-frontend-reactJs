import React from "react";
import "./App.css";
import TaskForm from "./components/taskForm/TaskForm";
import TaskList from "./components/taskList/TaskList";

const App = () => {
  return (
    <div className="todo-container">
      <div className="todo-content">
        <div className="header">
          <h1>Task Manager</h1>
        </div>
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
};

export default App;
