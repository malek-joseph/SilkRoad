// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "your apiKey",
  authDomain: "ayour uthDomain",
  projectId: "your projectId",
  storageBucket: "your storageBucket",
  messagingSenderId: "your messagingSenderId",
  appId: "your appId",
};

// initialize firebase app
const app = initializeApp(firebaseConfig);

// export
export const auth = getAuth(app);

export const googleAuthProvider = new GoogleAuthProvider();