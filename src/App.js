import React from "react";
import "./App.css";
import Heading from "./components/Heading";
import Cars from "./components/Cars";

function App() {
  return (
    <div className="container">
      <Heading />
      <Cars />
    </div>
  );
}

export default App;
