import React from 'react'
import { BrowserRouter as Router,Route ,Routes} from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";

const Body = () => {
  return (
    <Router>
        <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
      </Routes>
      </div>
    </Router>
  )
}

export default Body