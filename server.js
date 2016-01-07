const fs = require('fs');
const path = require('path');
const express = require ('express');
const bodyParser = require('body-parser');
const app = express();
const _ = require('underscore');

app.set('port', (process.env.PORT || 4567));

app.use('/', express.static(__dirname));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'fonts')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/tasks.json', function(req, res) {
  fs.readFile('tasks.json', function(err, data) {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});

app.post('/tasks.json', function(req, res) {
  fs.readFile('tasks.json', function(err, data) {
    var task = req.body;
    task.id = new Date().getTime();
    var tasks = JSON.parse(data);
    tasks.push(task);
    fs.writeFile('tasks.json', JSON.stringify(tasks, null, 2), function(err) {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(tasks);
    });
  })
});

app.put('/tasks.json/:id', function(req, res) {
  fs.readFile('tasks.json', function(err, data) {
    var task = req.body;
    var tasks = JSON.parse(data);
    _.find(tasks, function(_task){
      if (_task.id === task.id) _task.completed = task.completed;
    });
    fs.writeFile('tasks.json', JSON.stringify(tasks, null, 2), function(err) {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(tasks);
    });
  });
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
