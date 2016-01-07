import React from 'react'
import Comment from './Comment'

export default class CommentList extends React.Component {
  render() {
    var taskNodes = this.props.models.map((task) => {
      return (
        <Comment author={task.get('author')}>{task.get('text')}</Comment>
      );
    });
    return (
      <ul className="comment-list list-group" id="jquery-ui-sortable">
        {taskNodes}
      </ul>
    );
  }
}
