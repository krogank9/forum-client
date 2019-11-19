import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class PageButtons extends Component {
  getPageLink(num) {
    let params = this.props.match.params

    let pageNum = `/page-${num}`;
    if(num === 1) {
      pageNum = "";
    }

    return `/boards/${params.boardName}/${params.threadId}${pageNum}`;
  }

  render() {
    let numPages = 5;
    let buttons = [];

    for(let i=1; i<=numPages; i++) {
      buttons.push( <Link to={this.getPageLink(i)}>{i}</Link> );
    }

    return (
      <div>
        {buttons}
      </div>
    );
  }
}

export default PageButtons;