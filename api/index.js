'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const todos = require('./todos');

let nextId = 4;

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.get('/api/todos', (req, res) => {
  console.log(req.cookies);
  res.send(todos);
});

app.post('/api/todos', (req, res) => {
  let todo = {
    id: nextId++,
    title: req.body.title,
    completed: false
  };

  todos.push(todo);

  res.send(todo);
});

app.put('/api/todos/:id', (req, res) => {
  let todo = todos.find(todo => todo.id == req.params.id);

  if (!todo) return res.sendStatus(404);

  todo.title = req.body.title || todo.title;

  res.json(todo);
});

app.patch('/api/todos/:id', (req, res) => {
  let todo = todos.find(todo => todo.id == req.params.id);

  if (!todo) return res.sendStatus(404);

  todo.completed = !todo.completed;

  res.json(todo);
});

app.delete('/api/todos/:id', (req, res) => {
  let index = todos.findIndex(todo => todo.id == req.params.id);
  
  if (index === -1) return res.sendStatus(404);

  todos.splice(index, 1);

  res.sendStatus(204);
});

app.get('/api/access', (req, res) => {

  console.log(Object.entries(req.cookies).length);

  // res.cookie('username', req.body.username);
  // console.log('server');
  // console.log(req.cookies);
  if (Object.entries(req.cookies).length !== 0) {
    res.send('ok');
  } else {
    res.sendStatus(401);
  }
});

app.post('/api/access', (req, res) => {

  res.cookie('username', req.body.username);
  // console.log('server');
  // console.log(req.cookies);
  // res.redirect('/api/acces');
  res.send('ok');
});

app.listen(5000, 'localhost', ()=> console.log('Server is running'));