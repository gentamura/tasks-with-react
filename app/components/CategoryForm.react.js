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
    e.preventDefault();
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
    console.log('document.activeElement', document.activeElement);
    console.log('handleShowModal:this.refs.name', this.refs.name);
    this.refs.name.focus();
    console.log('document.activeElement', document.activeElement);
  }

  handleHideModal() {
    this.setState({filterClassName: 'dialog-filter hide'});
    this.setState({dialogClassName: 'dialog dialog-primary hide'});
  }

  handleKeyDown(e) {
    if (e.keyCode === 27) this.handleHideModal();
  }

  render() {
    return (
      <div>
        <input type="button" value="Add Category" className="btn btn-primary btn-block" onClick={this.handleShowModal.bind(this)}  onKeyDown={this.handleKeyDown.bind(this)} />
        <div className={this.state.filterClassName} onClick={this.handleHideModal.bind(this)} />
        <div className={this.state.dialogClassName}>
          <div className="container">
            <form className="category-form form-inline" onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-group">
                <input type="text" placeholder="Category name" ref="name" className="form-control" />
              </div>
              <input type="button" value="close" className="btn btn-defualt" onClick={this.handleHideModal.bind(this)} />
              <input type="submit" value="Add" className="btn btn-primary" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
