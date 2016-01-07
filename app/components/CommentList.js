import React from 'react'
import Comment from './Comment'

export default class CommentList extends React.Component {
  render() {
    var commentNodes = this.props.data.map((comment) => {
      return (
        <Comment author={comment.author}>{comment.text}</Comment>
      );
    });
    return (
      <ul className="comment-list list-group" id="jquery-ui-sortable">
        {commentNodes}
      </ul>
    );
  }
}
