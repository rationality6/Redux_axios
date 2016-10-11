import * as buttonsActions from '../actions/ButtonsActions'

const initialState = {
  number: 0
}

export default function counter1(state = initialState, action) {
  switch (action.type) {
    case buttonsActions.INCREMENT1:
      return {
        number: state.number + 1
      }
    case buttonsActions.DECREMENT1:
      return {
        number: state.number - 1
      }
    default:
      return state
  }
}
