import React from 'react'
import ReactDOM from 'react-dom'

export default class TaskForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    var author = this.refs.author.value.trim();
    var text   = this.refs.text.value.trim();
    if (!text || !author) return;
    this.props.onTasksSubmit({author: author, text: text});
    this.refs.author.value = '';
    this.refs.text.value = '';
  }

  render() {
    return (
      <div className="add-task">
        <form className="tasks-form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="row">
            <div className="col-md-5">
              <div className="form-group">
                <input type="text" placeholder="Your name" ref="author" className="form-control" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="form-group">
                <input type="text" placeholder="Say something..." ref="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-2">
              <input type="submit" value="Add" className="btn btn-primary btn-block" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
