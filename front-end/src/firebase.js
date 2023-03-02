// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGLGOVt9YnvJloQR8jSV8KeaAG6cW5CWA",
  authDomain: "silkroad-12211.firebaseapp.com",
  projectId: "silkroad-12211",
  storageBucket: "silkroad-12211.appspot.com",
  messagingSenderId: "727118286050",
  appId: "1:727118286050:web:29431821fb67f2e831a2bb",
};

// initialize firebase app
const app = initializeApp(firebaseConfig);

// export
export const auth = getAuth(app);

export const googleAuthProvider = new GoogleAuthProvider();