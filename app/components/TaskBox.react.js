import React from 'react'
import TaskList from './TaskList.react'
import TaskForm from './TaskForm.react'

export default class TaskBox extends React.Component {
  handleTasksSubmit(task) {
    this.props.tasks.create(task, {
      success: (tasks) => {
        this.this.props.onLoad();
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }
  
  render() {
    return (
      <div className="tasks-box">
        <TaskForm onTasksSubmit={this.handleTasksSubmit.bind(this)} />
        <TaskList tasks={this.props.tasks} onReload={this.props.onLoad} />
      </div>
    );
  }
}
