import React from 'react'
import Marked from 'marked'

export default class Comment extends React.Component {
  render() {
    var rawMarkup = Marked(this.props.children.toString(), {sanitize: true});
    return (
      <li className="comment ui-state-default list-group-item">
        <div className="media">
          <div className="media-left">
            <i className="toggle fa fa-check-square-o"></i>
          </div>
          <div className="media-body">
            <span className="title">
              <h6>{this.props.author}</h6>
              <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
            </span>
          </div>
          <div className="media-right">
            <i className="fa fa-trash-o delete"></i>
          </div>
        </div>
      </li>
    );
  }
}
