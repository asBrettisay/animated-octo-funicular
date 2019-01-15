import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';

import Nav from './Nav';
import Login from './Login';
import store from './user';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Nav />
          <Login />
        </Provider>
      </div>
    );
  }
}

export default App;
