import React, { Component } from 'react';
import store from './user';

import { connect } from 'react-redux';

function Nav(props) {
  return (
    <div>
      <h1>NAV BAR</h1>
      <p>Home</p>
      <p>Profile</p>
      <p>You are logged in as {props.user}</p>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Nav);
