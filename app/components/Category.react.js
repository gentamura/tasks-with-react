import React from 'react'
import ReactDOM from 'react-dom'

export default class Category extends React.Component {
  render() {
    const name = this.props.category.get('name');
    const id   = this.props.category.get('id');
    const href = "#category/" + id;
    return (
      <a
        href={href}
        onClick={this.props.onShowTasks.bind(this, id)}
        className={this.props.linkClassName}
      >
        <span
          className="glyphicon glyphicon-th-list"
          aria-hidden="true"
          style={{'margin-right':'0.6em'}}
        ></span>
        {name}
        <span className="badge pull-right">{this.props.category.get('taskNum')}</span>
        <span className={this.props.editClassName}></span>
      </a>
    );
  }
}
