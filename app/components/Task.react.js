import React from 'react'
import Marked from 'marked'

export default class Task extends React.Component {
  render() {
    return (
      <li className="task ui-state-default list-group-item">
        <Media task={this.props.task} onToggleClick={this.props.onToggleClick} onReload={this.props.onReload}/>
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
    return this.props.task.get('completed') ? 'fa fa-check-square-o' : 'fa fa-square-o';
  }
  getCompletedClassName() {
    return this.props.task.get('completed') ? 'content completed gray' : 'content';
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
      this.props.onReload();
    }
  }

  render() {
    var rawMarkup = Marked(this.props.task.get('content').toString(), {sanitize: true});
    return (
      <div className="media">
        <div className="media-left">
          <i
            className={this.state.toggle}
            onClick={this.handleToggleClick.bind(this)}
          ></i>
        </div>
        <div className="media-body">
          <span className={this.state.title} dangerouslySetInnerHTML={{__html: rawMarkup}} />
        </div>
        <div className="media-right">
          <i
            className="fa fa-trash-o delete"
            onClick={this.handleDeleteClick.bind(this)}
          ></i>
        </div>
      </div>
    );
  }
}
