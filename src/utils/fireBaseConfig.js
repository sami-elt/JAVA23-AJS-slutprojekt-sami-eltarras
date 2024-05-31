
import { initializeApp } from "firebase/app";
import { getDatabase, ref} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC-fid4m3Hy7aWpvFYcmNOt40hYJYtpBT0",
  authDomain: "slutprojekt-24eda.firebaseapp.com",
  databaseURL: "https://slutprojekt-24eda-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "slutprojekt-24eda",
  storageBucket: "slutprojekt-24eda.appspot.com",
  messagingSenderId: "192598436818",
  appId: "1:192598436818:web:e7ba7e62ed270afa00360b",
  measurementId: "G-RWJ1JM82L7"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

export const assignmentsRef = ref(db, "assignments");
