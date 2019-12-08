import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

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
    if(newNum > 9) {
      newNum = 1
    }
    else if(newNum < 1) {
      newNum = 9
    }

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
        <img src={this.state.curPic}></img>
        <div>
          <Link name="prev" to="#" onClick={this.changeProPic} className="title-link-light">&lt; Prev</Link>
          &nbsp;/&nbsp;
          <Link name="next" to="#" onClick={this.changeProPic} className="title-link-light">Next &gt;</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(ProfilePictureChooser);