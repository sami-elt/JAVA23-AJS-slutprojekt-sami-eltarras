import { useEffect, useState } from "react";
import FormInput from "./FormInput.jsx";
import Todo from "./ToDo.jsx";
import InProgress from "./InProgress.jsx";
import Done from "./Done.jsx";
import { assignmentsRef } from "../utils/fireBaseConfig.js";
import { onValue } from "firebase/database";

export function App() {
  const [firebase, setFirebase] = useState([]);
  const [error, setError] = useState("");

  //Collecting from firebase and updating state with an array of objects
  useEffect(() => {
    onValue(assignmentsRef, (snapshot) => {
      try {
        const firebaseArray = Object.entries(snapshot.val()).map(
          ([id, data]) => ({
            id,
            ...data,
          })
        );
        setFirebase(firebaseArray);
        console.log(firebaseArray);
      } catch {
        setError("something went wrong");
      }
    });
  }, []);

  //render components with firebase data
  return (
    <>
      <FormInput />
      <div className="box">
        <h1>To Do</h1>
        {firebase
          .filter((todo) => todo.status === "todo")
          .map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
      </div>
      <div className="box">
        <h1>In Progress</h1>
        {firebase
          .filter((progress) => progress.status === "inprogress")
          .map((progress) => (
            <InProgress key={progress.id} progress={progress} />
          ))}
      </div>
      <div className="box">
        <h1>Done</h1>
        {firebase
          .filter((done) => done.status === "done")
          .map((done) => (
            <Done key={done.id} done={done} />
          ))}
      </div>
      <p>{error}</p>
    </>
  );
}
