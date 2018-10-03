import React, { Component } from 'react';
import Section from './Section'
import WorkItem from './WorkItem'
import Result from './Result'
import SkillColumn from './SkillColumn'
import Config from '../config/Distil.js'

class Resume extends Component {
  render() {
    return (
      <div className="resume-container" >
        <Section title='Profile'>
          <div style={{padding: '8px'}}>
            { Config.profile }
          </div>
        </Section>
        <Section title='Experience'>
          { Config.experience.map((exp, i) => (<WorkItem
              key={i}
              name={exp.company}
              jobTitle={exp.jobTitle}
              dateRange={exp.dateRange}
              city={exp.city}
              state={exp.state}>
                {exp.results.map((result, j) => (<Result key={j} text={result}/>))}
            </WorkItem>))
          }
        </Section>
        <Section title='Education'>
          <WorkItem
            name="University of North Carolina"
            jobTitle={<span>Statistics<br/>Computer Science</span>}
            dateRange="aug 2008 - may 2012"
            city="Chapel Hill"
            state="NC"
          >
            <Result text='Studied Probability and Risk analysis in business and finance.'/>
            <Result text='Built several projects in Java including a liquid flow terrain map and a battleship game.'/>
            <Result text='Competed in Nationals for club Ultimate Frisbee'/>
          </WorkItem>
        </Section>
        <Section title='Skills'>
          <div className="row">
            <SkillColumn 
              title="Backend"
              skillList={[{name:'Node JS', stars: 5},
                          {name: 'Data Management', stars: 5},
                          {name: 'SQL', stars: 5},
                          {name: 'Unix', stars: 4}]}
            />
            <SkillColumn 
              title="Frontend"
              skillList={[{name: 'React', stars: 5},
                          {name: 'React Native', stars: 5},
                          {name: 'Dashboards', stars: 5},
                          {name: 'Responsive Design', stars: 5},
                        ]}
            />
          </div>
          <div className="row">
            <SkillColumn 
              title="General"
              skillList={[
                          {name: 'Inventory Management', stars: 5},
                          {name: 'Problem Solving', stars: 5},
                          {name: 'User Experience', stars: 4},
                          {name: 'Game Theory', stars: 4},
                        ]}
            />
            <SkillColumn 
              title="Dev-ops"
              skillList={[
                          {name: 'Nginx', stars: 5},
                          {name: 'Lets-Encrypt', stars: 4},
                          {name: 'Firebase', stars: 4},
                          {name: 'AWS', stars: 3},
                        ]}
            />
          </div>
        </Section>
        <Section title="References">
          <div style={{padding: '8px'}}>
            <div>Porfolio is available at https://tyconnors.com</div>
            <div>References available upon request.</div>
            <div><i>NOTE: This resume itself was generated from a personal React/Node web app.</i></div>
          </div>
        </Section>
      </div>
    );
  }
}

export default Resume;
