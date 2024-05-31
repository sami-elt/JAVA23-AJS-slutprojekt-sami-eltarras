import { ref, remove } from "firebase/database";
import {  db } from "../utils/fireBaseConfig.js";


function Done({done}) {

    function handleRemove() {

        const doneRef = ref(db, `assignments/` + done.id);
        remove(doneRef);
      }

    return ( 
        <div>
        <h2>{done.assignment}</h2>
        <h3>{done.category}</h3>
        <h3>-{done.assigned}</h3>
        <button onClick={handleRemove} id="done">Remove</button>
      </div>
     );
}

export default Done;