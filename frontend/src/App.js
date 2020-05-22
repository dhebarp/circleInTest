import React from "react";
import { Search } from "./pages/Search.js";
import { NavPage } from './components/Nav/Nav'
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavPage />
      <Search />
    </div>
  );
}

export default App;
