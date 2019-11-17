import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Switch } from "react-router-dom";

import BoardListPage from '../BoardListPage/BoardListPage';
import LoginPage from '../LoginPage/LoginPage';
import LandingPage from '../LandingPage/LandingPage';
import CreateThreadPage from '../CreateThreadPage/CreateThreadPage';   
import ThreadListPage from '../ThreadListPage/ThreadListPage';
import ViewThreadPage from '../ViewThreadPage/ViewThreadPage';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/boards" component={BoardListPage} />
          <Route exact path="/boards/:boardName" component={ThreadListPage} />
          <Route exact path="/boards/:boardName/create_thread" component={CreateThreadPage} />
          <Route exact path="/boards/:boardName/:threadId" component={ViewThreadPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route component={LandingPage} />
        </Switch>
    </div>
  );
}

export default App;
