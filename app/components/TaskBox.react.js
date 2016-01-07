import React from 'react'
import TasksList from './TasksList.react'
import TasksForm from './TasksForm.react'
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

  componentDidMount() {
    this.loadTaskssFromServer();
    setInterval(this.loadTaskssFromServer.bind(this), this.props.pollInterval);
  }

  render() {
    return (
      <div className="tasks-box">
        <TasksForm onTasksSubmit={this.handleTasksSubmit.bind(this)} />
        <TasksList tasks={this.state.tasks}/>
      </div>
    );
  }
}
