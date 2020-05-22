import React from "react";
import { Search } from "./pages/Search.js";
import { NavPage } from './components/Nav/Nav'
import {Foot } from './components/Footer/Foot'
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavPage />
      <Search />
      <Foot/>
    </div>
  );
}

export default App;
