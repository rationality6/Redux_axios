import * as counterActions from '../actions/CounterActions'

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
    case counterActions.INCREMENT:
      return {
        ...state,
        number: state.number + 1,
        dumbObject: {
          ...state.dumbObject,
          d: 3
        }
      };
    case counterActions.DECREMENT:
      return {
        ...state,
        number: state.number - 1,
        dumbObject: {
          ...state.dumbObject,
          b: 3
        }
      }
    case counterActions.TIMES:
      return {
        ...state,
        number: state.number * 2
      }
    case counterActions.DIVIDE:
      return{
        ...state,
        number: state.number / 2
      }
    case counterActions.RANDOMNUMBER:
      return{
        ...state,
        number: action.num
      }
    default:
      return state;
  }
}
