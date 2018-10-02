import React, { Component } from 'react';
import { FaUser, FaBriefcase, FaFlask, FaGraduationCap  } from 'react-icons/fa';

class AppIcon extends Component {
  getIcon(){
    let icon = this.props.name.toLowerCase()
    if(icon === 'profile')
      return <FaUser />
    if(icon === 'experience')
      return <FaBriefcase />
    if(icon === 'skills')
      return <FaFlask />
    if(icon === 'education')
      return <FaGraduationCap />
  }
  //Each section has a header and a horizontal line
  render() {
    let icon = this.props.name.toLowerCase();
    let isEducation = `${icon === 'education'? 'education':''}`;
    return (
      <div className={`icon-container ${isEducation}`} >
        <div className={`icon ${isEducation}`} >
          { this.getIcon() }
        </div>
      </div>
    );
  }
}

export default AppIcon;
