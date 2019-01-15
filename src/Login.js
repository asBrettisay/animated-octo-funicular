import React, { Component } from 'react';
import store, { login}  from './user';

import { connect } from 'react-redux';

class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event) {
    this.setState({
      username: event.target.value
    })
  }

  handleClick(event) {
    this.props.login(this.state.username);
  }


  render() {
    return (
      <div>
        <h1>Login</h1>
        <input value={this.state.username} onChange={this.handleChange} />
        <button onClick={this.handleClick} >Log In</button>
      </div>
    )
  }
}

export default connect(null, {login})(Login)
