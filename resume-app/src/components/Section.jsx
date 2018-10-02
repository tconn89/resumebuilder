import React, { Component } from 'react';
import Icon from './Icon'

class Section extends Component {
  //Each section has a header and a horizontal line
  render() {
    let props = this.props
    return (
      <div className="section" >
        <div className="inner-section"> <Icon name={props.title}/><div className="title-container"> { props.title }</div> </div>
        { props.children }
      </div>
    );
  }
}

export default Section;
