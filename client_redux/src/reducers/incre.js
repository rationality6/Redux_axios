import * as buttonsActions from '../actions/ButtonsActions'

const initialState = {
  number: 0,
  text: ''
}

export default function incre(state = initialState, action) {
  switch (action.type) {
    case buttonsActions.INCRE:
      return {
        ...state,
        number: state.number + 1
      }
    case buttonsActions.DECRE:
      return {
        ...state,
        number: state.number - 1
      }
    case buttonsActions.TIMES1:
      return{
        ...state,
        number: state.number * 2
      }
    case buttonsActions.DIVIDE1:
      return{
        ...state,
        number: state.number / 2
      }
    case buttonsActions.TYPING:
      return {
        ...state,
        text: action.text
      }
    default:
      return state;
  }
}
