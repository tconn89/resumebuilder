require('babel-register')({
  presets: ['env', 'react']
});

const http = require('http');
const Express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs')
let React = require('react');
let ReactDomServer = require('react-dom/server');
let Resume = require('./resume-app/src/App')

app = Express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Express.static('hosted'))

http.createServer(app).listen(8080);
console.log('Server is running on Port: 8080');

app.get('/pdf', (req, res) => {
  console.log('Begin');
  let html = ReactDomServer.renderToString(React.createElement(Resume.default))
  let files = fs.readdirSync('output')
  fs.writeFileSync(`test${files.length}.html`, html)
  res.send('good')
})
app.get('*', (req, res) => {
  console.log('Hello World')
  res.send({data: 'Hello World'})
})

app.post('*', (req, res) => {
  console.log('Post it')
  res.send({data: 'Post it'})
})