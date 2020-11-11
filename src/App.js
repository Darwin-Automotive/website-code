import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation'
import MainPage from './components/Main_page.js';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Navigation />
        <Router>
          <Switch>
            <Route path="/" exact component={MainPage} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;