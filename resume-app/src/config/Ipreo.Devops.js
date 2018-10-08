
export default {
  date: '10/03/18',
  profile: 'Looking for a competitive company to make an impact in the IT industry.',

  experience: [
    {
      company: 'Continuous Precision Medicine',
      jobTitle: 'Software Engineer and Dev-ops',
      dateRange: 'feb 2018 - sept 2018',
      city: 'Raleigh',
      state: 'NC',
      results: ['Built and debugged a Jenkins server to compile, build and test our source code.',
                'Created automation infrastructure with Terraform to create VPCs, EC2 instances, and security groups.',
                'Managed a Node server and oversaw improvements in error handling and readability.',
                'Created a Test environment to back-up company data in Amazon Web Services (AWS). Created Master and Slave relationship in RDS instance using MYSQL',
                'Given the provided UX mockups, executed an android software solution with React Native.',
                'Structured and validated our patient data pipeline from start to finish.']
    },
    {
      company: 'Coffeelux',
      jobTitle: 'Freelance Developer',
      dateRange: 'nov 2017 - feb 2018',
      city: 'Raleigh',
      state: 'NC',
      results: ['Managed a production system in Linux Ubuntu 16, including configurations of Nginx load balancer and SSL encryption.',
                'Learned React through a collection of projects including a dashboard that displays coffee consumption data (GPS Location and number of cups per day).',
                'Monitored server logs when debugging and troubleshooting problems.',
                'Connected to a custom RESTFUL Node JS API that managed coffee data in MongoDB.']
    },
    {
      company: 'Techdrone',
      jobTitle: 'Network Engineer',
      dateRange: 'oct 2016 - oct 2017',
      city: 'Raleigh',
      state: 'NC',
      results: ['Build a RESTFUL API in Node js for saving and loading game data including terrain, trees, houses, roads, and spawn points.',
                'Used Docker to containerize the production server and increase performance.',
                'Integrated the API into a Unity client and constructed all the login and world menu forms to consume my backend.']
    },
    {
      company: 'Custom Communications',
      jobTitle: 'Software Developer',
      dateRange: 'July 2016 - April 2017',
      city: 'Garner',
      state: 'NC',
      results: ['Build and Maintain internal workflow app for managing inventory and dispatching technicians.',
                'Created Angular directives (javascript) for building forms and handling user interaction.',
                'Improved performance on Postgres database queries.']
    },
  ],
  skills: [
    {
      name: 'Dev-ops',
      list: [ {name: 'Nginx', stars: 5},
              {name: 'Lets Encrypt', stars: 5},
              {name: 'Unix', stars: 5},
              {name: 'Terraform', stars: 4},
              {name: 'Docker', stars: 4},
              {name: 'AWS', stars: 4},
            ]
    },
    {
    name: 'Backend',
    list: [ {name: 'Node JS', stars: 5},
            {name: 'Data Management', stars: 5},
            {name: 'SQL', stars: 5},
            {name: 'Python', stars: 4},
            {name: 'Java', stars: 4},
          ]
    },
    {
      name: 'General',
      list: [ 
              {name: 'Monitoring', stars: 5},
              {name: 'Logging', stars: 5},
              {name: 'Automation', stars: 5},
              {name: 'Problem Solving', stars: 5},
              {name: 'React', stars: 5},
              {name: 'Slack', stars: 5},
            ]
    },{name: '', list: []}
],
}
