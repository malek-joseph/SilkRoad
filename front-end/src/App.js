import './App.css';
import { Route, Routes } from 'react-router-dom'
import {Login} from './pages/auth/Login'
import { Register } from './pages/auth/Register'
import {Home} from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/"  component={Home} />
      <Route path="/login"  component={Login} />
      <Route path="/register"  component={Register} />
    </Routes>
  );
}

export default App;
