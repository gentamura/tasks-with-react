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
      <div className="add-task">
        <form className="tasks-form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="row">
            <div className="col-md-10">
              <div className="form-group">
                <input type="text" placeholder="Say somthing..." ref="content" className="form-control" />
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
