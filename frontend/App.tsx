import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/about';
import Home from './pages/home';
import * as dotenv from 'dotenv';
import Login from './pages/login';



function App() {
    return (
        <div>App</div>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#app')!);

root.render(
    <Router>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </Router>

);