import React, { Component } from 'react';

class Section extends Component {
  //Each section has a header and a horizontal line
  render() {
    let props = this.props
    return (
      <div className="work" >
        <div className="name"> 
          <div>{ props.jobTitle }</div>
          <div>{ props.city + ', ' + props.state}</div>
        </div>
        <div className="description">
          <div>
            <div className="left"> { props.name } </div>
            <div className="right"> { props.dateRange.toUpperCase() } </div>
          </div>
          <ul>
            { props.children }
          </ul>
          <p className='skills'>{ props.skills }</p>
        </div>
      </div>
    );
  }
}

export default Section;
