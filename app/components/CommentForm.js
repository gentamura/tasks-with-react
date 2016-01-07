import React from 'react'
import ReactDOM from 'react-dom'

export default class CommentForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    var author = ReactDOM.findDOMNode(this.refs.author).value.trim();
    var text   = ReactDOM.findDOMNode(this.refs.text).value.trim();
    if (!text || !author) return;
    this.props.onCommentSubmit({author: author, text: text});
    ReactDOM.findDOMNode(this.refs.author).value = '';
    ReactDOM.findDOMNode(this.refs.text).value = '';
  }

  render() {
    return (
      <div className="add-task">
        <form className="comment-form" id="addTask" onSubmit={this.handleSubmit.bind(this)}>
          <div className="row">
            <div className="col-md-5">
              <div className="form-group">
                <input type="text" placeholder="Your name" ref="author" className="form-control" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="form-group">
                <input type="text" placeholder="Say something..." ref="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-2">
              <input type="submit" value="Add" className="btn btn-primary btn-block" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
