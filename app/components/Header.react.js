import React from 'react'
import ReactDOM from 'react-dom'

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <header className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">Tasks</a>
          </div>
        </div>
      </header>
    );
  }
}
