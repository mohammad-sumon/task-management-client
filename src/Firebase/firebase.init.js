// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXhmnVwMky9m-5u2zRg2IrpZ-mHEOEXzo",
  authDomain: "task-management-c1812.firebaseapp.com",
  projectId: "task-management-c1812",
  storageBucket: "task-management-c1812.appspot.com",
  messagingSenderId: "991213543304",
  appId: "1:991213543304:web:1f46ca2873a14c9479243d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;