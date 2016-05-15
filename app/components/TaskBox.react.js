import React from 'react'
import TaskList from './TaskList.react'
import TaskForm from './TaskForm.react'

export default class TaskBox extends React.Component {
  handleTasksSubmit(taskObj) {
    taskObj.categoryId = this.props.router.current.id;
    this.props.tasks.create(taskObj, {
      success: (tasks) => {
        this.props.onShowTasks(taskObj.categoryId);
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }

  render() {
    console.log('tasks', this.props.tasks);
    return (
      <div className="tasks-box">
        <TaskForm onTasksSubmit={this.handleTasksSubmit.bind(this)} />
        <TaskList tasks={this.props.tasks} onShowTasks={this.props.onShowTasks} router={this.props.router} />
      </div>
    );
  }
}
