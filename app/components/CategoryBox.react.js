import React from 'react'
import _ from 'underscore'

export default class CategoryBox extends React.Component {
  render() {
    var taskNodes = this.props.categories.map((category) => {
      return (
        <Category category={category} key={category.get('id')} onShowTasks={this.props.onShowTasks} />
      );
    });

    return (
      <ul>
        {taskNodes}
      </ul>
    );
  }
}


class Category extends React.Component {
  render() {
    const name = this.props.category.get('name');
    const id = this.props.category.get('id');
    return (
      <li onClick={this.props.onShowTasks.bind(this, id)}>{name}</li>
    );
  }
}
