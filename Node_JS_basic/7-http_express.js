// Express HTTP server with /students route
const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const db = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const lines = ['This is the list of our students'];

  // Capture console.log output by overriding it temporarily
  const originalLog = console.log;
  const logs = [];
  console.log = (...args) => logs.push(args.join(' '));

  countStudents(db)
    .then(() => {
      console.log = originalLog;
      res.send([...lines, ...logs].join('\n'));
    })
    .catch((err) => {
      console.log = originalLog;
      res.status(500).send(err.message);
    });
});

app.listen(1245);

module.exports = app;