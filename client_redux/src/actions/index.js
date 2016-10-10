import * as types from './ActionTypes'

export const increment = () => {
    return {type: types.INCREMENT};
}

export const increment1 = () => {
  return {type:types.INCREMENT1}
}

export function decrement() {
    return {type: types.DECREMENT}
}

export function decrement1() {
    return {type: types.DECREMENT1}
}

export function setColor(color) {
    return {type: types.SET_COLOR, color}
}

export function incre() {
    return {type: types.INCRE}
}

export function decre() {
    return {type: types.DECRE}
}

export function typing(text) {
    return {type: types.TYPING, text}
}

export function typeCopy(text) {
    return {type: types.TYPE_COPY, text}
}

export function setUserData(data) {
    return {type: types.SET_USER_DATA, data}
}
