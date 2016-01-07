import React from 'react'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import $ from 'jquery'

export default class CommentBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      models: []
    };
  }

  loadCommentsFromServer() {
    var taskList = new this.props.collection();
    taskList.fetch({
      success: (models) => {
        console.log("JSON file load was successful", JSON.stringify(taskList, null, " "));
        this.setState({models: models})
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }

  handleCommentSubmit(task) {
    var taskList = new this.props.collection();
    taskList.create({
      success: (task) => {
        var tasks = this.state.models;
        var newTasks = tasks.concat([task]);
        this.setState({models: newTasks});
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }

  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
  }

  render() {
    return (
      <div className="comment-box">
        <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
        <CommentList models={this.state.models}/>
      </div>
    );
  }
}
