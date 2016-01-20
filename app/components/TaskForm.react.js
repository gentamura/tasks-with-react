import React from 'react'
import ReactDOM from 'react-dom'

export default class TaskForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    var content = this.refs.content.value.trim();
    if (!content) return;
    this.props.onTasksSubmit({content: content});
    this.refs.content.value = '';
  }

  render() {
    return (
      <form className="tasks-form" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group tasks-form-text">
          <input type="text" placeholder="Say somthing..." ref="content" className="form-control" />
        </div>
        <input type="submit" value="Add task" className="btn btn-primary tasks-form-submit hvr-pop" />
      </form>
    );
  }
}
