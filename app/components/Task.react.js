import React from 'react'
import Marked from 'marked'

export default class Task extends React.Component {
  render() {
    return (
      <li className="task ui-state-default list-group-item">
        <Media task={this.props.task} onToggleClick={this.props.onToggleClick} />
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
    }
  }

  render() {
    var rawMarkup = Marked(this.props.task.get('content').toString(), {sanitize: true});
    return (
      <div className="media">
        <div className="media-left">
          <span
            className={this.state.toggle}
            onClick={this.handleToggleClick.bind(this)}
          ></span>
        </div>
        <div className="media-body">
          <span className={this.state.title} dangerouslySetInnerHTML={{__html: rawMarkup}} />
        </div>
        <div className="media-right">
          <span
            className="fui-trash"
              onClick={this.handleDeleteClick.bind(this)}

          ></span>
        </div>
      </div>
    );
  }
}
