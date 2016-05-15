import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'underscore'
import TaskBox from './TaskBox.react'
import CategoryBox from './CategoryBox.react'
import Header from './Header.react'

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
        var id; 
        if (_.isEmpty(window.location.hash)) {
          id = categories.first().id;
          this.props.router.navigate("#category/" + id, {trigger: true});
          this.handleShowTasks(id);
        } else {
          this.handleShowTasks(this.props.router.current.id);
        }
      }
    });
  }

  handleShowTasks(categoryId) {
    var taskList = this.props.taskList;
    taskList.fetch({
      success: (tasks) => {
        var _tasks = tasks.filtered({categoryId: parseInt(categoryId, 10)});
        this.setState({tasks: _tasks});

        var categories = this.state.categories;
        var category = categories.get(parseInt(categoryId, 10));
        category.save({'taskNum': _tasks.length})
        this.setState({categories: categories});
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
      <div className="container">
        <Header />
        <div className="row">
          <CategoryBox
            router={this.props.router}
            categories={this.state.categories}
            onShowTasks={this.handleShowTasks.bind(this)}
            onShowCategories={this.handleShowCategories.bind(this)}
          />
          <article className="main col-md-9">
            <TaskBox
              router={this.props.router}
              tasks={this.state.tasks}
              onShowTasks={this.handleShowTasks.bind(this)}
            />
          </article>
        </div>
      </div>
    );
  }
}
