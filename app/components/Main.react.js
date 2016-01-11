import React from 'react'
import ReactDOM from 'react-dom'
import TaskBox from './TaskBox.react'
import CategoryBox from './CategoryBox.react'

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
  }

  handleLoadFromServer() {
    var taskList = this.props.taskList;
    taskList.fetch({
      success: (tasks) => {
        this.setState({tasks: tasks});
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }

  componentDidMount() {
    this.handleLoadFromServer();
  }

  render() {
    return (
      <div id="container">
        <div className="row">
          <div className="col-md-10">
            <h1>Tasks with React</h1>
          </div>
          <div className="col-md-2">
            <div className="pull-right">Log in / Log out</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">
            <aside id="category">
              <CategoryBox tasks={this.state.tasks} />
            </aside>
          </div>
          <div className="col-md-10">
            <div>
              <TaskBox tasks={this.state.tasks} onLoad={this.handleLoadFromServer.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
