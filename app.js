import React from 'react'
import ReactDOM from 'react-dom'
import TaskList from './app/collections/TaskList'
import TaskBox from './app/components/TaskBox.react'

var taskList = new TaskList();

ReactDOM.render(
  <TaskBox collection={taskList} pollInterval={2000} />,
  document.getElementById('yield')
);
