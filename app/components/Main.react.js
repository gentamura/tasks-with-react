import React from 'react'
import ReactDOM from 'react-dom'
import TaskBox from './TaskBox.react'
import CategoryBox from './CategoryBox.react'
import _ from 'underscore'

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      tasks: []
    }
  }

  handleLoadFromServer() {
    var categoryList = this.props.categoryList;
    categoryList.fetch({
      success: (categories) => {
        this.setState({categories: categories});
      }
    });
  }

  handleShowTasks(categoryId) {
    var taskList = this.props.taskList;
    taskList.fetch({
      success: (tasks) => {
        var _tasks = tasks.filtered({categoryId: categoryId});
        this.setState({tasks: _tasks});
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
              <CategoryBox
                categories={this.state.categories}
                onShowTasks={this.handleShowTasks.bind(this)}
              />
            </aside>
          </div>
          <div className="col-md-10">
            <div>
              <TaskBox
                tasks={this.state.tasks}
                onShowTasks={this.handleShowTasks.bind(this)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
