import axios from "axios";
import React, { useEffect } from "react";
import "./App.css";
import TaskForm from "./components/taskForm/TaskForm";
import corbeille from "./assets/corbeille.png";
import { useDispatch, useSelector } from "react-redux";
import { editTask, getTasks, deleteTask } from "./feature/task.slice";

const App = () => {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.tasks.tasksData);

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  const updateTask = (task) => {
    let check = !task.completed;
    axios.put("https://todo-app-api-p6wq.onrender.com/api/v1/" + task._id, {
      completed: check,
    });
    dispatch(editTask([check, task._id]));
  };

  const deleteTaskById = (task) => {
    axios.delete("https://todo-app-api-p6wq.onrender.com/api/v1/" + task._id);
    dispatch(deleteTask(task._id));
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
              .slice()
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
                      onClick={() => deleteTaskById(task)}
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
