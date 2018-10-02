import React, { Component } from 'react';

class Result extends Component {
  //Each section has a header and a horizontal line
  render() {
    let props = this.props
    return (
      <li>
        { this.props.text }
      </li>
    );
  }
}

export default Result;
