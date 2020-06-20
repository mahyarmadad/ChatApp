import React from "react";
import { Redirect, Route, BrowserRouter as Router } from "react-router-dom";
import Join from "./Join";
import Chat from "./Chat";
function App() {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" exact component={Chat} />
      <Redirect to="/" />
    </Router>
  );
}

export default App;
