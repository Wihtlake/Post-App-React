import React from "react";
import { ReactDOM } from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Post from "./page/Post";
import About from "./page/About";
import Navbar from "./components/UI/Navbar/Navbar";
import Main from "./page/Main";
function App() {
  return (
    <div className='App'>

      <BrowserRouter>
      <Navbar/>
        <Routes>
              <Route path="/" element={<main />} />
              <Route path="/posts" element={<Post />} />
              <Route path="/*" element={<Post />} />
              <Route path="/about" element={<About />} />
              
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;