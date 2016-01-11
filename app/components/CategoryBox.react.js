import React from 'react'

export default class CategoryBox extends React.Component {
  render() {
    var taskNodes = this.props.tasks.map((task) => {
      return (
        <Category categoryName={task.get('category')} key={task.id} />
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
    return (
      <li>{this.props.categoryName}</li>
    );
  }
}
