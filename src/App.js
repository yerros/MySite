import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Movie from './pages/Movie/Movie';
import Login from './pages/Auth/Login';

class App extends Component {
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/movies' component={Movie} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    )
  }
}

export default App;
