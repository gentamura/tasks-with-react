import React from 'react'
import ReactDOM from 'react-dom'
import TaskList from './app/collections/TaskList'
import TaskBox from './app/components/TaskBox.react'

var taskList = new TaskList();

ReactDOM.render(
  <TaskBox taskList={taskList} />,
  document.getElementById('yield')
);
