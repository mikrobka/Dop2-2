import React, {useState} from 'react';
import './App.css';
import {Site} from "./components/Site";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Site/>
            </BrowserRouter>
        </div>
    );
}


export default App;
