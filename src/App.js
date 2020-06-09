import React, { useEffect } from "react";
import { EventHandler } from "./scripts/EventHandler";
import Homepage from "./pages/homepage/homepage.component";
import "./styles/base/overall.scss";

import { Route, Switch } from "react-router-dom";
import Main from "./pages/Main/Main.component";
function App() {
  useEffect(() => {
    let ev = new EventHandler();
  }, []);
  return (
    <div className="App">
      {/* <Main /> */}
      <Homepage />

      {/* <Route exact path="/Main" component={Main} />
        <Route exact path="/Homepage" component={Homepage} /> */}
    </div>
  );
}

export default App;
