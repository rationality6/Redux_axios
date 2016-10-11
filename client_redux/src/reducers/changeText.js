import {CHANGE_TEXT} from '../actions/CounterActions'

const initialState = {
  text: ''
}

export default function changeText(state = initialState, action){
  if (action.type === CHANGE_TEXT){
    return {
      text: action.text
    }
  }else{
    return state
  }
}
