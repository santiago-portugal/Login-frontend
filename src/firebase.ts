// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSmScxHbzQiipkSCnaF_USs7BGu3C_9XY",
  authDomain: "holaapp-66ec5.firebaseapp.com",
  projectId: "holaapp-66ec5",
  storageBucket: "holaapp-66ec5.firebasestorage.app",
  messagingSenderId: "362038882821",
  appId: "1:362038882821:web:1b29242978f91627b0226c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export { auth, provider };