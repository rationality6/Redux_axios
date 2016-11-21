import * as counterActions from './CounterActions'
import * as buttonsActions from './ButtonsActions'
import * as usersActions from './UsersActions'


//Counter
export const increment = () => {
  return {type: counterActions.INCREMENT};
}

export function decrement() {
  return {type: counterActions.DECREMENT}
}

export function times() {
  return {type: counterActions.TIMES}
}

export function divide() {
  return {type: counterActions.DIVIDE}
}

export function randomNumber(num) {
  return {type: counterActions.RANDOMNUMBER, num}
}

export function setColor(color) {
  return {type: counterActions.SET_COLOR, color}
}

export function typeCopy(text) {
  return {type: counterActions.TYPE_COPY, text}
}

export function changeText(text) {
  return {type: counterActions.CHANGE_TEXT, text}
}


//Buttons
export function incre() {
  return {type: buttonsActions.INCRE}
}

export function decre() {
  return {type: buttonsActions.DECRE}
}

export function times1() {
  return {type: buttonsActions.TIMES1}
}

export function divide1() {
  return {type: buttonsActions.DIVIDE1}
}

export const increment1 = () => {
  return {type: buttonsActions.INCREMENT1}
}

export function decrement1() {
  return {type: buttonsActions.DECREMENT1}
}

export function typing(text) {
  return {type: buttonsActions.TYPING, text}
}

export function setColor1(color){
  return {type: buttonsActions.SET_COLOR1, color}
}

//Users
export function setUsersData(data) {
  return {type: usersActions.SET_USERS_DATA, data}
}
