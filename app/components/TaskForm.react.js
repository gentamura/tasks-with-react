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
        <span className="glyphicon glyphicon-plus" style={{position:'absolute',left:'1.8em',top:'0.64em',color:'lightgray'}}></span>
        <input
          type="text"
          placeholder="Add task by enter..."
          ref="content"
          className="form-control"
          onKeyDown={this.handleSubmit.bind(this)}
          style={{'padding-left':'2em'}}
        />
      </div>
    );
  }
}
