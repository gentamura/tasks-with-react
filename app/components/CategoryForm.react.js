import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Modal, FormGroup, FormControl } from 'react-bootstrap'

export default class CategoryForm extends React.Component {
  constructor(options) {
    super(options)
    this.state = {
      showModal: false
    }
    this.add   = this.add.bind(this)
    this.open  = this.open.bind(this)
    this.close = this.close.bind(this)
  }

  add() {
    var name = this.refs.category_name.value.trim();
    this.props.onCategoriesSubmit({name: name});
    this.setState({showModal: false});
  }

  open() {
    this.setState({showModal: true});
  }

  close() {
    this.setState({showModal: false});
    window.history.back();
  }

  render() {
    return (
      <div>
        <Button href="#category/new" bsStyle="primary" onClick={this.open} block>Add Category</Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header>
            <Modal.Title>Add Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type="text"
              placeholder="Category name"
              ref="category_name"
              className="form-control"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="success" onClick={this.add}>Add</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
