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

  loadTaskssFromServer() {
    var taskList = this.props.collection;
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
    /*
    var tasks = this.state.tasks;
    tasks.add(task);
    this.setState({tasks: tasks});
    */
    var taskList = this.props.collection;
    taskList.create(task);
  }

  handleToggleClick(task, e) {
    console.log('task', task);
    console.log('e', e);
    // e.preventDefault();
    task.toggle();
    var dom = e.currentTarget;
    if ( task.get('completed') ) {
      dom.classList.add('fa-check-square-o');
      dom.classList.remove('fa-square-o');
    } else {
      dom.classList.add('fa-square-o');
      dom.classList.remove('fa-check-square-o');
    }

    /*
    var task = e.currentTarget;
    console.log('task', task);
    task.toggle();
    */

    // this.loadTaskssFromServer();
  }

  componentDidMount() {
    this.loadTaskssFromServer();
    setInterval(this.loadTaskssFromServer.bind(this), this.props.pollInterval);
  }

  render() {
    return (
      <div className="tasks-box">
        <TasksForm onTasksSubmit={this.handleTasksSubmit.bind(this)} />
        <TasksList tasks={this.state.tasks} onToggleClick={this.handleToggleClick}/>
      </div>
    );
  }
}
