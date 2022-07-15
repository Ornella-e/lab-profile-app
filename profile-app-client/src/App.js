import './App.css';
import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Profile from './pages/Profile'
import backImg from "./oval-bg.png"

function App() {
  return (
   
    <div className="App">
      <Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/login" element={<Signin />} />
        <Route path="/auth/user" element={<Profile />} />
			</Routes>
    </div>
  );
}

export default App;
