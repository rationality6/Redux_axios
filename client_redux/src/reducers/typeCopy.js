import * as counterActions from '../actions/CounterActions'

const initialState = {
  text: ''
}

export default function typeCopy(state = initialState, action) {
  if (action.type === counterActions.TYPE_COPY) {
    return {text: action.text}
  } else {
    return state
  }
}
