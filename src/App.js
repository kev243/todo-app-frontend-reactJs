import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/taskForm/TaskForm";
import corbeille from "./assets/corbeille.png";

const App = () => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1").then((res) => {
      setTask(res.data);
    });
  }, []);

  const updateTask = (task) => {
    let check = !task.completed;
    axios
      .put("http://localhost:5000/api/v1/" + task._id, {
        completed: check,
      })
      .then((res) => {
        console.log(res);
      });
  };

  const deleteTask = (task) => {
    axios.delete("http://localhost:5000/api/v1/" + task._id).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="todo-container">
      <div className="header">
        <h1>Task Manager</h1>
      </div>
      <TaskForm />
      <div className="list-container">
        {task
          ? task
              .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
              .map((task) => {
                return (
                  <div key={task._id} className="task-list">
                    <div className="left-side">
                      <input
                        type={"checkbox"}
                        defaultChecked={task.completed}
                        onClick={() => updateTask(task)}
                      />
                      {task.completed ? (
                        <label>
                          <del>{task.name}</del>
                        </label>
                      ) : (
                        <label>{task.name}</label>
                      )}
                    </div>

                    <img
                      src={corbeille}
                      alt="img-delete"
                      onClick={() => deleteTask(task)}
                    />
                  </div>
                );
              })
          : " no task yet "}
      </div>
    </div>
  );
};

export default App;
