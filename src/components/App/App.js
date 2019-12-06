import React from 'react';
import './App.css';

import { Route, Switch } from "react-router-dom";

import ForumContext from '../../contexts/ForumContext.js';

import TokenService from '../../services/token-service';
import ForumApiService from '../../services/forum-api-service';

import NavBar from '../NavBar/NavBar';
import BoardListPage from '../BoardListPage/BoardListPage';
import LoginPage from '../LoginPage/LoginPage';
import CreateAccountPage from '../CreateAccountPage/CreateAccountPage';
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

  onUserLogout = (authToken, userName, userId) => {
    TokenService.clearAuthToken();
    this.setState({loggedInUser: null});
  }

  onUserLoggedIn = (authToken, userName, userId) => {
    TokenService.saveAuthToken(authToken)
    this.setState({
      loggedInUser: {userName: userName, id: userId}
    })
  }

  tryRefreshLogin = () => {
    let authToken = TokenService.getAuthToken();
    console.log(authToken)
    if(authToken && authToken.length > 0) {
      ForumApiService.refresh(authToken).then(json => {
        this.onUserLoggedIn(json.authToken, json.userName, json.userId)
      })
    }
  }

  componentDidMount() {
    this.tryRefreshLogin();
  }

  render() {
    let contextValue = {
      ...(this.state),
      "onUserLoggedIn": this.onUserLoggedIn,
      "onUserLogout": this.onUserLogout
    };
    return (
      <ForumContext.Provider value={contextValue}>
        <div className="App">
          <NavBar />

          <Switch>
            <Route exact path="/boards" component={BoardListPage} />
            <Route exact path="/boards/:boardName" component={ThreadListPage} />
            <Route exact path="/boards/:boardName/create_thread" component={CreateThreadPage} />
            <Route exact path="/threads/:threadName/:pageNum?" component={ViewThreadPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/create-account" component={CreateAccountPage} />
            <Route component={LandingPage} />
          </Switch>
        </div>
      </ForumContext.Provider>
    );
  }
}

export default App;
