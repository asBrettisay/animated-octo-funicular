import { createStore } from 'redux';

export function login(username) {
  return {
    type: 'LOGIN_USER',
    user: username
  }
}

const initialState = {
  user: ''
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'LOGIN_USER':
      const newState = {}
      newState.user = action.user
      return newState
    default:
      return state
  }
}

export default createStore(reducer);

