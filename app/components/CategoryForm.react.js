import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Modal } from 'react-bootstrap'

export default class CategoryForm extends React.Component {
  constructor(options) {
    super(options)
    this.state = {
      showModal: false
    }
    this.add   = this.add.bind(this)
    this.open  = this.open.bind(this)
    this.close = this.close.bind(this)

    console.log('this.props.router', this.props.router);
    console.log('this.props.router.current', this.props.router.current);
    console.log('this.props.router.current.id', this.props.router.current.id);
  }

  add() {
  }

  open() {
    this.setState({showModal: true});
  }

  close() {
    this.setState({showModal: false});
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
            A body message.
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
