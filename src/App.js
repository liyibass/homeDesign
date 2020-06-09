import React, { useEffect } from "react";
import { EventHandler } from "./scripts/EventHandler";
import Homepage from "./pages/homepage/homepage.component";

function App() {
  useEffect(() => {
    let ev = new EventHandler();
  }, []);
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
