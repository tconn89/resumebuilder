
export default {
  date: '10/16/18',
  profile: 'Looking for a competitive company to make an impact on the IT industry.',

  experience: [
    {
      company: 'Continuous Precision Medicine',
      jobTitle: 'Software Engineer',
      dateRange: 'feb 2018 - sept 2018',
      city: 'Raleigh',
      state: 'NC',
      results: [
                'Created a Test environment to back-up company data in Amazon Web Services (AWS). Created Master and Slave relationship in RDS instance using MYSQL',
                'Built and debugged a Jenkins server to compile, build and test our source code.',
                'Managed a Node server and oversaw improvements in error handling and readability.',
                'Given the provided UX mockups, executed an android software solution with React Native.',
                'Crafted a calendar management tool for medical and patient health purposes in reaction to the Opioid Epidemic.',
                'Structured and validated our patient data pipeline from start to finish.']
    },
    {
      company: 'Coffeelux',
      jobTitle: 'Freelance Developer',
      dateRange: 'nov 2017 - feb 2018',
      city: 'Raleigh',
      state: 'NC',
      results: ["Manage security with SSL through Nginx and Let's Encrypt",
                'Encapsulated our production server inside a docker container for improved performance and automation.',
                'Learned React through a collection of projects including a dashboard that displays coffee consumption data (GPS Location and number of cups per day).',
                'Enabled the app to generate widgets that can be embedded in other websites like Wordpress.',
                'Connected to a custom RESTFUL Node JS API that managed coffee data in MongoDB.',
                ]
    },
    {
      company: 'Techdrone',
      jobTitle: 'Network Engineer',
      dateRange: 'oct 2016 - oct 2017',
      city: 'Raleigh',
      state: 'NC',
      results: ['Build a RESTFUL API in Node js for saving and loading game data including terrain, trees, houses, roads, and spawn points.',
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
                'Cultivated a user preference feature for improved paginated results and better UX.',
                'Improved performance on Postgres database queries.']
    },
  ],
  skills: [
    {
      name: 'Dev-ops',
      list: [ {name: 'Nginx', stars: 5},
              {name: 'Lets Encrypt', stars: 5},
              {name: 'Firebase', stars: 4},
              {name: 'AWS', stars: 3},
            ]
    },
    {
      name: 'Backend',
      list: [ {name: 'Node JS', stars: 5},
              {name: 'Data Management', stars: 5},
              {name: 'SQL', stars: 5},
              {name: 'Unix', stars: 5}]
    },
    {
    name: 'Frontend',
    list: [ {name: 'React', stars: 5},
            {name: 'React Native', stars: 5},
            {name: 'Dashboards', stars: 5},
            {name: 'Asynchronous Events', stars: 5}],

  },
    {
      name: 'General',
      list: [ {name: 'Inventory Management', stars: 5},
              {name: 'Problem Solving', stars: 5},
              {name: 'User Experience', stars: 4},
              {name: 'Game Theory', stars: 4}]
    },
],
}
