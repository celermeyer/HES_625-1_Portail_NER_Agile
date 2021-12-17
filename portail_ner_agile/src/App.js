import React from "react";
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "../node_modules/react-router-dom";
import Homepage from "./pages/Homepage";
import DetailNER from "./pages/DetailNER";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/ner" element={<DetailNER />} />
            </Routes>
        </div>
    );
}

export default App;
