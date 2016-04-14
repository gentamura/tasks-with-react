import React from 'react'
import ReactDOM from 'react-dom'

export default class TaskForm extends React.Component {
  constructor(options) {
    super(options);
    this.ENTER_KEY = 13;
  }
    
  handleSubmit(e) {
    if (e.which !== this.ENTER_KEY) return;
    e.preventDefault();
    var content = this.refs.content.value.trim();
    if (!content) return;
    this.props.onTasksSubmit({content: content});
    this.refs.content.value = '';
  }

  render() {
    return (
      <div className="form-group">
        <span className="glyphicon glyphicon-plus" style={{position:'absolute',left:'2.2em',top:'1.2em',color:'lightgray'}}></span>
        <input
          type="text"
          placeholder="Add task by enter..."
          ref="content"
          className="form-control input-lg"
          onKeyDown={this.handleSubmit.bind(this)}
          style={{paddingLeft:'2em'}}
        />
      </div>
    );
  }
}
