import React from "react";
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import HealthForm from './components/Form';
import HeaderBanner from './components/HeaderBanner';
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  return (
      <div className="App">
        <HeaderBanner></HeaderBanner>
      <HealthForm></HealthForm>
    </div>
    
  );
}

export default App;
