import Backbone from 'backbone'
import React from 'react'
import ReactDOM from 'react-dom'
import CategoryList from './app/collections/CategoryList'
import TaskList from './app/collections/TaskList'
import Router from './app/routers/Router'
import Main from './app/components/Main.react'

var categoryList = new CategoryList();
var taskList = new TaskList();
var router = new Router();

ReactDOM.render(
  <Main router={router} categoryList={categoryList} taskList={taskList} />,
  document.getElementById('yield')
);

Backbone.history.start();
