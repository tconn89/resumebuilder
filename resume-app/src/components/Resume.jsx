import React, { Component } from 'react';
import Section from './Section'
import WorkItem from './WorkItem'
import Result from './Result'
import Config from '../config/Current'

class Resume extends Component {
  render() {
    return (
      <div className="resume-container" >
        <Section title='Experience'>
          { Config.experience.map((exp, i) => (<WorkItem
              key={i}
              name={exp.company}
              jobTitle={exp.jobTitle}
              dateRange={exp.dateRange}
              city={exp.city}
              state={exp.state}
              skills={exp.skills}>
                {exp.results.map((result, j) => (<Result key={j} text={result}/>))}
              
            </WorkItem>))
          }
        </Section>
        <Section title='Education'>
          <WorkItem
            name="University of North Carolina"
            jobTitle={<span> B.S. Statistics<br/>Computer Science</span>}
            dateRange="aug 2008 - may 2012"
            city="Chapel Hill"
            state="NC"
          >
            <Result text='Studied Probability and Risk analysis in business and finance.'/>
            <Result text='Built several projects in Java including a liquid flow terrain map and a battleship game.'/>
            <Result text='Competed in Nationals for club Ultimate Frisbee'/>
          </WorkItem>
        </Section>
        <Section title="References">
          <div style={{padding: '8px'}}>
            <div>Porfolio is available at http://tyconnors.com</div>
            <div>References available upon request.</div>
          </div>
        </Section>
      </div>
    );
  }
}

export default Resume;
