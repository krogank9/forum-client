import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Switch, Link } from "react-router-dom";

import ForumContext from '../../contexts/ForumContext.js';

import TokenService from '../../services/token-service';
import ForumApiService from '../../services/forum-api-service';

import NavBar from '../NavBar/NavBar';
import BoardListPage from '../BoardListPage/BoardListPage';
import LoginPage from '../LoginPage/LoginPage';
import LandingPage from '../LandingPage/LandingPage';
import CreateThreadPage from '../CreateThreadPage/CreateThreadPage';
import ThreadListPage from '../ThreadListPage/ThreadListPage';
import ViewThreadPage from '../ViewThreadPage/ViewThreadPage';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
    }
  }

  userLoggedIn = (authToken, userName, userId) => {
    TokenService.saveAuthToken(authToken)
    this.setState({
      loggedInUser: {userName: userName, id: userId}
    })
  }

  tryRefreshLogin = () => {
    let authToken = TokenService.getAuthToken();
    if(authToken && authToken.length > 0) {
      ForumApiService.refresh(authToken).then(json => {
        this.userLoggedIn(json.authToken, json.userName, json.userId)
      })
    }
  }

  componentDidMount() {
    this.tryRefreshLogin();
  }

  render() {
    let contextValue = {
      ...(this.state),
      "userLoggedIn": this.userLoggedIn
    };
    return (
      <ForumContext.Provider value={contextValue}>
        <div className="App">
          <NavBar />

          <Switch>
            <Route exact path="/boards" component={BoardListPage} />
            <Route exact path="/boards/:boardName" component={ThreadListPage} />
            <Route exact path="/boards/:boardName/create_thread" component={CreateThreadPage} />
            <Route exact path="/boards/:boardName/:threadName/:pageNum?" component={ViewThreadPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route component={LandingPage} />
          </Switch>
        </div>
      </ForumContext.Provider>
    );
  }
}

export default App;
