import './App.css';
import { Route, Routes } from 'react-router-dom'
import React, { useEffect } from "react";


import { Login } from './pages/auth/Login'
import Register from './pages/auth/Register'
import { Home } from './pages/Home'
import Header from "./components/nav/Header";
import RegisterComplete   from './pages/auth/RegisterComplete'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@popperjs/core';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { auth } from "./firebase";
import { useDispatch } from "react-redux";



const App = () => {
  const dispatch = useDispatch();

  // We use useEffect to check firebase auth state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        console.log("user", user);
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            email: user.email,
            token: idTokenResult.token,
          },
        });
      }
    });
    // cleanup
    return () => unsubscribe();
  }, []);



  return (
    <>
      <Header />
      {/* The toast container shows the client a notification with a message of our own */}
          <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/complete" element={<RegisterComplete />} />
      </Routes>
    </>

  );
}

export default App;
