import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import ForumApiService from '../../services/forum-api-service';
import ForumContext from '../../contexts/ForumContext';

import ProfilePictureChooser from './ProfilePictureChooser/ProfilePictureChooser';

class CreateAccountPage extends Component {
  static contextType = ForumContext

  constructor() {
    super();

    this.state = {
      userName: "",
      password: "",
      profilePicture: 1,
      errorMessage: ""
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    ForumApiService.registerUser(this.state.userName, this.state.password, this.state.profilePicture)
      .then(json => {
        console.log(json)
        //alert("Account created successfuly")
        ForumApiService.login(this.state.userName, this.state.password)
          .then(json => {
            console.log(json)
            this.context.onUserLoggedIn(json.authToken, json.userName, json.userId)
            this.props.history.goBack()
          })
          .catch(e => {
            this.setState({errorMessage: e.error})
          })
      })
      .catch(e => {
        this.setState({errorMessage: e.error})
      })

  }

  updateFormState = (evt) => {
    let name = evt.target.getAttribute("name")

    this.setState({ [name]: evt.target.value })
  }

  updateProPic = (proPicInfo) => {
    this.setState({ profilePicture: proPicInfo.picNumber })
  }

  render() {
    return (
      <section>
        <h2>
          Create Account
        </h2>

        <form onSubmit={this.handleSubmit}>
          <div className="form-error">{this.state.errorMessage}</div>

          Username:
          <input type="text" name="userName" onChange={this.updateFormState} required />

          <br />

          Password:
          <input type="password" name="password" onChange={this.updateFormState} required />

          <br />

          Choose Your Profile Picture:
          <ProfilePictureChooser name="profilePicture" onChange={this.updateProPic}></ProfilePictureChooser>

          <br />

          <input type="submit" value="Create Account" />
        </form>
      </section>
    );
  }
}

export default withRouter(CreateAccountPage);