import Backbone from 'backbone'
import React from 'react'
import ReactDOM from 'react-dom'
import CommentBox from './app/components/CommentBox'
import $ from 'jquery'
import _ from 'underscore'

Backbone.$ = $;

ReactDOM.render(
  <CommentBox url="comments.json" pollInterval={2000} />,
  document.getElementById('yield')
);
