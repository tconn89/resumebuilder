import React, { Component } from 'react';
import Section from './Section'
import WorkItem from './WorkItem'
import Result from './Result'
import SkillColumn from './SkillColumn'

class Resume extends Component {
  render() {
    return (
      <div className="resume-container" >
        <Section title='Profile'>
          <div style={{height: '8px'}}></div>
          Looking for a crypto/gamer/tenacious company to push my talents forward. <br/>
          <i>NOTE: This resume itself was generated from a personal React/Node web app.</i>
        </Section>
        <Section title='Experience'>
          <WorkItem
            name="Continuous Precision Medicine" jobTitle="Software Engineer"
            dateRange="FEB 2018 - SEPT 2018"
            city="Raleigh"
            state="NC">
            <Result text="Executed on provided UX mockups to create an android app with React Native."/>
            <Result text="Created a Test environment to back-up company data in Amazon Web Services (AWS). Created Master and Slave relationship in RDS instance using MYSQL"/>
            <Result text="Built and debugged a Jenkins server to compile, build and test our source code."/>
            <Result text="Managed a Node server and oversaw improvements in error handling and readability."/>
          </WorkItem>
          <WorkItem
            name="CoffeeLux" jobTitle="Freelance Developer"
            dateRange="NOV 2017 - FEB 2018"
            city="Raleigh"
            state="NC">
            <Result text="Learned React through a collection of projects including a dashboard that displays coffee consumption data (GPS Location and number of cups per day)."/>
            <Result text="Enabled the app to generate widgets that can be embedded in other websites like Wordpress."/>
            <Result text="Connected to a custom RESTFUL Node JS API that managed coffee data in MongoDB."/>
          </WorkItem>
          <WorkItem
            name="Techdrone" jobTitle="Network Engineer"
            dateRange="OCT 2016 - OCT 2017"
            city="Raleigh"
            state="NC">
            <Result text="Build a RESTFUL API in Node js for saving and loading game data including terrain, trees, houses, roads, and spawn points."/>
            <Result text="Integrated the API into a Unity client and constructed all the login and world menu forms to consume my backend."/>
          </WorkItem>
          <WorkItem
            name="Customs Communications" jobTitle="Software Developer"
            dateRange="JULY 2016 - APRIL 2017"
            city="Raleigh"
            state="NC">
            <Result text="Created Angular directives (javascript) for building forms and handling user interaction."/>
            <Result text="Cultivated a user preference feature for improved paginated results and better UX."/>
            <Result text="Build and Maintain internal workflow app for dispatching technicians and their inventory."/>
            <Result text="Improved performance on Postgres database queries."/>
          </WorkItem>
        </Section>
        <Section title='Education'>
          <WorkItem
            name="University of North Carolina" jobTitle={<span>Statistics<br/>Computer Science</span>}
            dateRange="Aug 2008 - May 2012"
            city="Chapel Hill"
            state="NC">
            <Result text="Learned about Probability and Risk analysis in business and finance."/>
            <Result text="Built several projects in Java including a liquid flow terrain map and a battleship game."/>
            <Result text="Played club Ultimate Frisbee and competed in Nationals."/>
          </WorkItem>
        </Section>
        <Section title='Skills'>
          <div className="row">
            <SkillColumn 
              title="Backend"
              skillList={[{name:'Node JS', stars: 5},
                          {name: 'Unix', stars: 4},
                          {name: 'SQL', stars: 5}]}
            />
            <SkillColumn 
              title="Frontend"
              skillList={[{name:'React', stars: 1},
                          {name: 'HTML', stars: 3},
                          {name: 'CSS', stars: 2}]}
            />
          </div>
          <div className="row">
            <SkillColumn 
              title="Dev-ops"
              skillList={[{name:'AWS', stars: 3},
                          {name: 'Firebase', stars: 4},
                          {name: 'Unix', stars: 5},
                          {name: 'Docker', stars: 3},
                        ]}
            />
          </div>
        </Section>
      </div>
    );
  }
}

export default Resume;
