import React from 'react'
import ReactDOM from 'react-dom'
import TaskBox from './TaskBox.react'
import CategoryBox from './CategoryBox.react'

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

  handleShowCategories() {
    var categoryList = this.props.categoryList;
    categoryList.fetch({
      success: (categories) => {
        this.setState({categories: categories});
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }

  mainForceUpdate(e) {
    console.log('mainForceUpdate');
    console.log('this.props.router.current', this.props.router.current);
    this.forceUpdate();
  }

  componentWillMount() {
    this.props.router.on("route", this.mainForceUpdate.bind(this));
  }

  componentWillUnmount() {
    this.props.router.off("route", this.mainForceUpdate);
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
            <CategoryBox
              categories={this.state.categories}
              onShowTasks={this.handleShowTasks.bind(this)}
              onShowCategories={this.handleShowCategories.bind(this)}
            />
          </div>
          <div className="col-md-10">
            <div>
              <TaskBox
                router={this.props.router}
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
