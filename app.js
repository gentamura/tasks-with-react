import React from 'react'
import ReactDOM from 'react-dom'
import TaskList from './app/collections/TaskList'
import Main from './app/components/Main.react'

var taskList = new TaskList();

ReactDOM.render(
  <Main taskList={taskList} />,
  document.getElementById('yield')
);
