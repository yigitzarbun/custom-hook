import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

function App() {
  const [name, setName] = useLocalStorage("name", "");
  return (
    <div className="App">
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default App;
