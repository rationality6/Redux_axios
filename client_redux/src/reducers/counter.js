import * as types from '../actions/ActionTypes'

const initialState = {
  number: 0,
  dummy: 'dumbdumb',
  dumbObject: {
    d: 0,
    u: 1,
    m: 2,
    b: 3
  }
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        number: state.number + 1,
        dumbObject: {
          ...state.dumbObject,
          d: 3
        }
      };
    case types.DECREMENT:
      return {
        ...state,
        number: state.number - 1,
        dumbObject: {
          ...state.dumbObject,
          b: 3
        }
      }
    case types.TIMES:
      return {
        ...state,
        number: state.number * 2
      }
    case types.DIVIDE:
      return{
        ...state,
        number: state.number / 2
      }
    case types.RANDOMNUMBER:
      return{
        ...state,
        number: action.num
      }
    default:
      return state;
  }
}
