import React from 'react'
import Marked from 'marked'

export default class Task extends React.Component {
  render() {
    return (
      <li className="ui-state-default list-group-item">
        <Media task={this.props.task} onToggleClick={this.props.onToggleClick} onShowTasks={this.props.onShowTasks} router={this.props.router} />
      </li>
    );
  }
}

class Media extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: this.getToggleClassName(),
      title: this.getCompletedClassName()
    }
  }

  getToggleClassName() {
    return this.props.task.get('completed') ? 'fui-checkbox-checked' : 'fui-checkbox-unchecked';
  }
  getCompletedClassName() {
    return this.props.task.get('completed') ? 'task-center completed gray' : 'task-center';
  }

  handleToggleClick(e) {
    this.props.task.toggle();
    this.setState({
      toggle: this.getToggleClassName(),
      title: this.getCompletedClassName()
    });
  }

  handleDeleteClick(e) {
    if (confirm('Are you sure?')) {
      this.props.task.delete();
      this.props.onShowTasks(this.props.router.current.id);
    }
  }

  render() {
    var rawMarkup = Marked(this.props.task.get('content').toString(), {sanitize: true});
    return (
      <div className="task">
        <div className="task-left">
          <span
            className={this.state.toggle}
            onClick={this.handleToggleClick.bind(this)}
          ></span>
        </div>
        <div className={this.state.title} dangerouslySetInnerHTML={{__html: rawMarkup}} />
        <div className="task-right">
          <span
            className="fui-trash hvr-buzz-out"
            onClick={this.handleDeleteClick.bind(this)}
          ></span>
        </div>
      </div>
    );
  }
}
