import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import ForumApiService from '../../../services/forum-api-service';
import ForumContext from '../../../contexts/ForumContext';

class ProfilePictureChooser extends Component {
  static contextType = ForumContext

  constructor() {
    super();
    
    this.state = {
      picNumber: 1,
      curPic: `${process.env.PUBLIC_URL}/assets/profile-pictures/1.svg`
    }
  }

  changeProPic = (evt) => {
    let name = evt.target.getAttribute("name")

    evt.preventDefault()

    let add = evt.target.name === "prev" ? -1 : 1
    let newNum = this.state.picNumber + add
    newNum = newNum % 10
    newNum = Math.max(newNum, 1)

    console.log(`add: ${add}, newNum: ${newNum}`)

    const newState = {
      picNumber: newNum,
      curPic: `${process.env.PUBLIC_URL}/assets/profile-pictures/${newNum}.svg`
    };

    this.setState({...newState})

    if( this.props.onChange ) {
      this.props.onChange(newState)
    }
  }

  render() {
    return (
      <div>
        <button name="prev" onClick={this.changeProPic}>&lt;</button>
        <img src={this.state.curPic}></img>
        <button name="next" onClick={this.changeProPic}>&gt;</button>
      </div>
    );
  }
}

export default withRouter(ProfilePictureChooser);