import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7yds7QMxLa4DdqRgFR98II20y3AZwz88",
  authDomain: "instagram-clone-d8490.firebaseapp.com",
  projectId: "instagram-clone-d8490",
  storageBucket: "instagram-clone-d8490.appspot.com",
  messagingSenderId: "776738024196",
  appId: "1:776738024196:web:63eabcf652258db9dffe51"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
