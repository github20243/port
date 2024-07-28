import React from "react";
import "./styles/main.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Projects from "./components/pages/Projects";
import Contacts from "./components/pages/Contacts";
import Project from "./components/pages/Project";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';

function App() {
    return (
        <div className="custom-scrollbar">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/projects/:id" element={<Project />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
