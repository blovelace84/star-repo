import React, { useState } from "react";
import Space from "./components/Space";
import './App.css';
import TitleScreen from "./components/TitleScreen";

const App = () => {
  const [hasStarted, setHasStarted] = useState(false);
  return(
    <div className="app">
      {hasStarted ? (
        <Space />
      ) : (
        <TitleScreen onStart={() => setHasStarted(true)} />
      )}
    </div>
  );
}

export default App;