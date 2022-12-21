import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/about';
import Home from './pages/home';
import Login from './pages/login';

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