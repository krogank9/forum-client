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
  }

  handleForm = (evt) => {
    evt.preventDefault();
    let data = new FormData(evt.target);

    let boardName = this.props.match.params.boardName;
    let boardId = parseInt(boardName.split(".").pop());

    if (this.context.loggedInUser && boardId !== 0) {
      ForumApiService.postThread(TokenService.getAuthToken(), boardId, data.get('subject'), data.get('content'))
        .then(json => {
          this.props.history.push(`/boards/${boardName}/${Utils.normalizeThreadName(json.name)}.${json.id}`)
        })
        .catch(e => {
          console.log(e)
          alert(`Error creating thread: ${e.error}`)
        })
    }
    else if (!this.context.loggedInUser) {
      alert("Please log in to post");
    }
    else {
      alert("Error");
    }
  }

  render() {
    return (
      <section>
        <h2>Create Thread</h2>

        <form onSubmit={this.handleForm}>
          <span>Subject:</span>
          <input type="text" name="subject" />

          <br />

          <span>Content:</span>
          <textarea name="content"></textarea>

          <br />

          {false && <input type="submit" value="Cancel" />}
          <input type="submit" />
        </form>
      </section>
    );
  }
}

export default withRouter(MakeThreadPage);