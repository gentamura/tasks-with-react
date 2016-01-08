import React from 'react'
import Marked from 'marked'

export default class Task extends React.Component {
  render() {
    return (
      <li className="task ui-state-default list-group-item">
        <Media task={this.props.task} onToggleClick={this.props.onToggleClick}/>
      </li>
    );
  }
}

class Media extends React.Component {
  render() {
    return (
      <div className="media">
        <MediaLeft task={this.props.task} onToggleClick={this.props.onToggleClick}/>
        <MediaBody task={this.props.task} />
        <MediaRight task={this.props.task} />
      </div>
    );
  }
}
class MediaLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: this.setClassName()
    }
  }
  setClassName() {
    return this.props.task.get('completed') ? 'fa fa-check-square-o' : 'fa fa-square-o';
  }

  render() {
    return (
      <div className="media-left">
        <i
          className={this.state.toggle}
          onClick={this.props.onToggleClick.bind(null, this.props.task)}
        ></i>
      </div>
    );
  }
}
class MediaBody extends React.Component {
  render() {
    var rawMarkup = Marked(this.props.task.get('text').toString(), {sanitize: true});
    return (
      <div className="media-body">
        <span className="title">
          <h6>{this.props.task.get('author')}</h6>
          <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
        </span>
      </div>
    );
  }
}
class MediaRight extends React.Component {
  render() {
    return (
      <div className="media-right">
        <i className="fa fa-trash-o delete"></i>
      </div>
    );
  }
}
