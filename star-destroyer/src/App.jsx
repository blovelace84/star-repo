import React, { useState, useEffect } from "react";
import Space from "./components/Space";
import './App.css';
import TitleScreen from "./components/TitleScreen";

const App = () => {
  const [hasStarted, setHasStarted] = useState(false);
  useEffect(() => {
    document.title = hasStarted ? 'Star Destroyer!!' : 'Shoot the Stars!!';
  }, [hasStarted]);
  return(
    <div className="app">
      {hasStarted ? (
        <Space onReturnToTitle={() => setHasStarted(false)} />
      ) : (
        <TitleScreen onStart={() => setHasStarted(true)} />
      )}
    </div>
  );
}

export default App;