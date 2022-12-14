import React from 'react';
import { BrowserRouter as Router, Routes , Route, Link, BrowserRouter, useLocation } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './Home/Home'
import LinkPage from './LinkPage/LinkPage'
import Create from './Create/Create'





function App() {
  
 
  return (
    
    <div className="app">
    <Routes>
      <Route path="" element={<Home/>}/>
      <Route path="*" element={<LinkPage/>}/>
      <Route path="/create" element={<Create/>}/>
    </Routes>
  </div>

  //<Route path="" element={<p>Create your LinkStock now</p>}/>
  //<Route path="*" element={<p>Welcome to {useLocation().pathname.replace("/", "")}'s LinkStock</p>}/>
    
    
  );
}

export default App;
