import React from 'react'
import ReactDOM from 'react-dom'

export default class CategoryForm extends React.Component {
  constructor(options) {
    super(options)
    this.state = {
      filterClassName: 'dialog-filter hide',
      dialogClassName: 'dialog dialog-primary hide'
    };
  }

  handleSubmit(e) {
    if (e) e.preventDefault();
    var name = this.refs.name.value.trim();
    if (!name) return;
    this.props.onCategoriesSubmit({name: name});
    this.refs.name.value = '';
    this.handleHideModal();
  }

  handleShowModal(e) {
    e.preventDefault();
    this.setState({filterClassName: 'dialog-filter'});
    this.setState({dialogClassName: 'dialog dialog-primary'});
    setTimeout(() => this.refs.name.focus(), 300);
  }

  handleHideModal() {
    this.refs.name.value = '';
    this.setState({filterClassName: 'dialog-filter hide'});
    this.setState({dialogClassName: 'dialog dialog-primary hide'});
  }

  handleKeyDown(e) {
    const ENTER_KEY = 13;
    const ESCAPE_KEY = 27;
    if (e.keyCode === ENTER_KEY) {
      this.handleSubmit();
    } else if (e.keyCode === ESCAPE_KEY) {
      this.handleHideModal();
    }
  }

  render() {
    return (
      <div>
        <input type="button" value="Add Category" className="btn btn-primary btn-block hvr-pop" onClick={this.handleShowModal.bind(this)} />
        <div className={this.state.filterClassName} />
        <div className={this.state.dialogClassName}>
          <div className="container">
            <form className="category-form form-inline" onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-group">
                <input type="text" placeholder="Category name" ref="name" className="form-control" onKeyDown={this.handleKeyDown.bind(this)} />
              </div>
              <input type="submit" value="Add" className="btn btn-primary" />
              <input type="button" value="close" className="btn btn-defualt" onClick={this.handleHideModal.bind(this)} />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
