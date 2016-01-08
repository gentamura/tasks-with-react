import React from 'react'
import TasksList from './TaskList.react'
import TasksForm from './TaskForm.react'
import $ from 'jquery'

export default class TaskBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: []
    };
  }

  taskListloadTasksFromServer() {
    var taskList = this.props.taskList;
    taskList.fetch({
      success: (tasks) => {
        this.setState({tasks: tasks})
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }

  handleTasksSubmit(task) {
    var taskList = this.props.taskList;
    taskList.create(task, {
      success: (tasks) => {
        this.taskListloadTasksFromServer();
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }

  handleToggleClick(task, e) {
    console.log('task', task);
    console.log('e', e);
    // e.preventDefault();
    task.toggle();
    this.taskListloadTasksFromServer();
    /*
    var dom = e.currentTarget;
    if ( task.get('completed') ) {
      dom.classList.add('fa-check-square-o');
      dom.classList.remove('fa-square-o');
    } else {
      dom.classList.add('fa-square-o');
      dom.classList.remove('fa-check-square-o');
    }


    var task = e.currentTarget;
    console.log('task', task);
    task.toggle();
    */

    // this.taskListloadTasksFromServer();
  }

  componentDidMount() {
    this.taskListloadTasksFromServer();
  }

  render() {
    return (
      <div className="tasks-box">
        <TasksForm onTasksSubmit={this.handleTasksSubmit.bind(this)} />
        <TasksList tasks={this.state.tasks} onToggleClick={this.handleToggleClick.bind(this)}/>
      </div>
    );
  }
}
