import { update, ref } from "firebase/database";
import { db } from "../utils/fireBaseConfig.js";

function Todo({ todo}) {
  function handleSubmit(event) {
    event.preventDefault();

    //getting the person from the inputForm then with id using it to update the status
    const person = event.target.toDo.value;
    const toDoRef = ref(db, "assignments/" + todo.id);
    update(toDoRef, { assigned: person, status: "inprogress" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{todo.assignment}</h2>
      <h2>{todo.category}</h2>
      <input type="text" required placeholder="Enter name" id="toDo" />
      <button type="submit">Assign</button>
    </form>
  );
}

export default Todo;
