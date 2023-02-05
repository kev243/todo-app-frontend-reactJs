import React from "react";
import "./taskForm.css";

const taskForm = () => {
  return (
    <div className="form-container">
      <div className="form-content">
        <form>
          <input type="text" placeholder="Add a task here"></input>
          <input type="submit" value="Add" />
        </form>
      </div>
    </div>
  );
};

export default taskForm;
