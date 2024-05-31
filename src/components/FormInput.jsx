import { assignmentsRef } from "../utils/fireBaseConfig.js";
import { push } from "firebase/database";
import { useState } from "react";

function FormInput() {
  function handleSubmit(event) {
    event.preventDefault();

    //get what i need from the forminputs
    const category = event.target.category.value;
    const assignment = event.target.task.value;
    const status = "todo";

    const newTask = {
      assignment,
      category,
      status,
      assigned: "",
    };

    push(assignmentsRef, newTask);
  }

  return (
    <div className="form">
      <h1>Scrum Board</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" required placeholder="Add Task" id="task" />
        <select id="category">
          <option value="ux">UX</option>
          <option value="frontend">Front End</option>
          <option value="backend">Back End</option>
        </select>

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default FormInput;
