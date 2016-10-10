import * as types from './ActionTypes'

//Counter!
export const increment = () => {
  return {type: types.INCREMENT};
}

export function decrement() {
  return {type: types.DECREMENT}
}

export function times() {
  return {type: types.TIMES}
}

export function divide() {
  return {type: types.DIVIDE}
}

export function randomNumber(num){
  return {type: types.RANDOMNUMBER, num}
}

export function setColor(color) {
  return {type: types.SET_COLOR, color}
}

export function typeCopy(text) {
  return {type: types.TYPE_COPY, text}
}


//Buttons
export function incre() {
  return {type: types.INCRE}
}

export function decre() {
  return {type: types.DECRE}
}

export function times1(){
  return {type:types.TIMES1}
}

export function divide1(){
  return {type:types.DIVIDE1}
}

export const increment1 = () => {
  return {type: types.INCREMENT1}
}

export function decrement1() {
  return {type: types.DECREMENT1}
}

export function typing(text) {
  return {type: types.TYPING, text}
}


//Users
export function setUserData(data) {
  return {type: types.SET_USER_DATA, data}
}
