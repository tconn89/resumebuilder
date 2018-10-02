import React, { Component } from 'react';
import Skill from './Skill'

class Section extends Component {
  //Each section has a header and a horizontal line
  render() {
    let props = this.props
    return (
      <div className="half">
        <h4> {props.title} </h4>
        {props.skillList.map((skill, i) => <Skill key={i} name={skill.name} stars={skill.stars}/>)}
      </div>
    );
  }
}

export default Section;
