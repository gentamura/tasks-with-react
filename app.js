import React from 'react'
import ReactDOM from 'react-dom'
import CategoryList from './app/collections/CategoryList'
import TaskList from './app/collections/TaskList'
import Main from './app/components/Main.react'

var categoryList = new CategoryList();
var taskList = new TaskList();

ReactDOM.render(
  <Main categoryList={categoryList} taskList={taskList} />,
  document.getElementById('yield')
);
