import React, { Component } from 'react';

class MakeThreadPage extends Component {
  render() {
    return (
      <section>
        <h2>Create Thread</h2>

        <form>
          <span>Subject:</span>
          <input id="Subject" type="text" />

          <br />

          <span>Content:</span>
          <textarea id="Content"></textarea>

          <br />

          <input type="submit" value="Cancel" />
          <input type="submit" />
        </form>
      </section>
    );
  }
}

export default MakeThreadPage;