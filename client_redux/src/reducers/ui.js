import * as counterActions from '../actions/CounterActions'

const initialState = {
  color: [255, 255, 255]
}

export default function ui(state = initialState, action) {
  if (action.type === counterActions.SET_COLOR) {
    return {color: action.color}
  } else {
    return state;
  }
}
