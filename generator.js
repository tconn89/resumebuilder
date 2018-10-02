require('babel-register')({
  presets: ['env', 'react']
});

const fs = require('fs')
let React = require('react');
let ReactDomServer = require('react-dom/server');
let Resume = require('./resume-app/src/App')

let html = ReactDomServer.renderToString(React.createElement(Resume.default))
let files = fs.readdirSync('output')
fs.writeFileSync(`output/test${files.length}.html`, html)
console.log(`writing test${files.length}.html`);