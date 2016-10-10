import * as types from '../actions/ActionTypes'

const initialState = {
  number: 0
}

export default function counter1(state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT1:
      return {
        number: state.number + 1
      }
    case types.DECREMENT1:
      return {
        number: state.number - 1
      }
    default:
      return state
  }
}
