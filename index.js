import Backbone from 'backbone'
import React from 'react'
import ReactDOM from 'react-dom'
import CommentBox from './components/CommentBox'
import $ from 'jquery'

Backbone.$ = $;
console.log(Backbone);

ReactDOM.render(
  <CommentBox url="comments.json" pollInterval={2000} />,
  document.getElementById('container')
);
