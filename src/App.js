import React from "react";
import "./App.css";
import LandingView from "./components/LandingView";
import ChooseView from "./components/ChooseView";

function App() {
  return (
    <div className="App">
      <LandingView />
      <ChooseView />
    </div>
  );
}

export default App;
