import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import User from './components/User';
import Home from './components/Home';
import NotFound from './components/NotFound';
import GithubState from './context/github/GithubState';
import AlerState from './context/alert/AlertState';
const App = () => {
  return (
    <GithubState>
      <AlerState>
        <Router>
          <div className='App'>
            <Navbar title='Github Finder' icon='fab fa-github' />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlerState>
    </GithubState>
  );
};

export default App;
