import { update, ref } from "firebase/database";
import { db } from "../utils/fireBaseConfig";


function InProgress({ progress}) {

  function handleProgress(){

    const progressRef = ref(db, "assignments/" + progress.id);
    update(progressRef, { status: "done" });
  }

  return (
    <div>
      <h3>{progress.assignment}</h3>
      <h3>{progress.category}</h3>
      <h3>-{progress.assigned}</h3>
      <button onClick={handleProgress}>Done</button>
    </div>
  );
}

export default InProgress;
