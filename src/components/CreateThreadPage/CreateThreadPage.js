import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import ForumApiService from '../../services/forum-api-service';
import TokenService from '../../services/token-service';

import ForumContext from '../../contexts/ForumContext'

import Utils from "../../utils";

class MakeThreadPage extends Component {
  static contextType = ForumContext

  constructor() {
    super();

    this.state = {
      errorMessage: ""
    }
  }

  handleForm = (evt) => {
    evt.preventDefault();
    let data = new FormData(evt.target);

    let boardName = this.props.match.params.boardName;
    let boardId = parseInt(boardName.split(".").pop());

    if (this.context.loggedInUser) {
      ForumApiService.postThread(TokenService.getAuthToken(), boardId, data.get('subject'), data.get('content'))
        .then(json => {
          this.props.history.push(`/boards/${boardName}/${Utils.normalizeThreadName(json.name)}.${json.id}`)
        })
        .catch(e => {
          this.setState({errorMessage: e.error})
        })
    }
    else {
      this.setState({errorMessage: "Please log in to post"})
    }
  }

  render() {
    return (
      <section>
        <h2>Create Thread</h2>

        <form onSubmit={this.handleForm}>
          <div className="form-error">{this.state.errorMessage}</div>

          <span>Subject:</span>
          <input type="text" name="subject" required />

          <br />

          <span>Content:</span>
          <textarea name="content" required></textarea>

          <br />

          {false && <input type="submit" value="Cancel" />}
          <input type="submit" />
        </form>
      </section>
    );
  }
}

export default withRouter(MakeThreadPage);