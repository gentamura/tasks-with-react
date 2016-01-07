import React from 'react'
import ReactDOM from 'react-dom'
import TaskList from './app/collections/TaskList'
import CommentBox from './app/components/CommentBox'

ReactDOM.render(
  // <CommentBox url="comments.json" pollInterval={2000} />,
  <CommentBox collection={TaskList} pollInterval={2000} />,
  document.getElementById('yield')
);
