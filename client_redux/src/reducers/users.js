import * as usersActions from '../actions/UsersActions'

const initialState = {
    data: []
}
export default function users(state = initialState, action) {
    switch (action.type) {
        case usersActions.SET_USERS_DATA: {
            return { ...state, data: action.data}
        }

        default:
            return state;
    }
}
