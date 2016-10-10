import * as types from '../actions/ActionTypes'

const initialState = {
  number: 0,
  text: ''
}

export default function incre(state = initialState, action) {
  switch (action.type) {
    case types.INCRE:
      return {
        ...state,
        number: state.number + 1
      }
    case types.DECRE:
      return {
        ...state,
        number: state.number - 1
      }
    case types.TIMES1:
      return{
        ...state,
        number: state.number * 2
      }
    case types.DIVIDE1:
      return{
        ...state,
        number: state.number / 2
      }
    case types.TYPING:
      return {
        ...state,
        text: action.text
      }
    default:
      return state;
  }
}
