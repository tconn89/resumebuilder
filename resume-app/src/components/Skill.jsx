import React, { Component } from 'react';
import Icon from './Icon'

class Section extends Component {
  skillRatio(){
    let stars = this.props.stars
    if(stars === 5)
      return '●●●●●'
    if(stars === 4)
      return '●●●●○'
    if(stars === 3)
      return '●●●○○'
    if(stars === 2)
      return '●●○○○'
    if(stars === 1)
      return '●○○○○'

    return '○○○○○'
  }
  render() {
    let props = this.props
    return (
      <div className="row space-between">
        <div>{props.name}</div><div className="dots">{this.skillRatio()}</div>
      </div>
    );
  }
}

export default Section;
