require('babel-register')({
  presets: ['env', 'react']
});

const fs = require('fs')
const React = require('react');
const ReactDomServer = require('react-dom/server');
const Resume = require('./resume-app/src/App')

const html = ReactDomServer.renderToString(React.createElement(Resume.default))
fs.writeFileSync(`output/test1.html`, html)
console.log(`writing test1.html`);
