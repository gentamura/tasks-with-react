import React from 'react'
import ReactDOM from 'react-dom'

export default class Category extends React.Component {
  render() {
    const name = this.props.category.get('name');
    const id   = this.props.category.get('id');
    const href = "#category/" + id;
    return (
      <li>
        <a href={href} onClick={this.props.onShowTasks.bind(this, id)} className={this.props.linkClassName}>
          {name}
          <i className={this.props.editClassName}></i>
          <span className="pull-right">{this.props.category.get('taskNum')}</span>
        </a>
      </li>
    );
  }
}
