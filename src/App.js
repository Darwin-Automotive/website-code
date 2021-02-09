import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import MainPage from "./components/Main_page.js";
import "./App.css";
import Events from "./components/events/Events";

class App extends React.Component {
  render() {
    return (
      <>
        <Navigation />
        <Router>
          <Switch>
            <Route path="/" exact>
              <MainPage />
            </Route>
            <Route path="/events" exact>
              <Events />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
