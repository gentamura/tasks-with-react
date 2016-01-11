import React from 'react'
import TaskList from './TaskList.react'
import TaskForm from './TaskForm.react'

export default class TaskBox extends React.Component {
  handleTasksSubmit(task) {
    task.categoryId = this.props.tasks.first().get('categoryId');
    this.props.tasks.create(task, {
      success: (tasks) => {
        this.props.onShowTasks(task.categoryId);
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
        <TaskList tasks={this.props.tasks} />
      </div>
    );
  }
}
