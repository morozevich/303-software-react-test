import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Main from './Main';
import Detail from './Detail';

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={(props) => (
            <Main {...props}/>
          )}/>
          <Route path="/detail" render={(props) => (
            <Detail {...props}/>
          )}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
