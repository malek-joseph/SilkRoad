import './App.css';
import { Route, Routes } from 'react-router-dom'


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




function App() {
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
