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
        if (this.props.router.current.id) this.handleShowTasks(this.props.router.current.id);
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
      <div className="wrapper">
        <header className="header">
          <h1><a href="/">Tasks with React</a></h1>
        </header>
        <aside className="aside">
          <CategoryBox
            router={this.props.router}
            categories={this.state.categories}
            onShowTasks={this.handleShowTasks.bind(this)}
            onShowCategories={this.handleShowCategories.bind(this)}
          />
        </aside>
        <article className="main">
          <TaskBox
            router={this.props.router}
            tasks={this.state.tasks}
            onShowTasks={this.handleShowTasks.bind(this)}
          />
        </article>
        <footer className="footer">Footer</footer>
      </div>
    );
  }
}
