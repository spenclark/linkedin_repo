import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Header from "./components/Home/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
