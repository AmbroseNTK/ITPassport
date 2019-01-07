import { User } from '../models/user.model';
import * as UserAction from '../actions/user.actions';

export type Action = UserAction.All;

/// Default app state
const defaultState: User = { currentUser: {}, error: {} }

/// Helper function to create new state object
const newState = (state, newData) => {
    return Object.assign({}, state, newData)
}

/// Reducer function
export function userReducer(state: User = defaultState, action: Action) {
    console.log(action.type, state)
    switch (action.type) {
        case UserAction.LOGIN:
            action.payload.afAuth.auth.signInWithEmailAndPassword(action.payload.email, action.payload.email)
                .then((value) => {
                    return newState(state, { currentUser: action.payload.afAuth.auth.currentUser, error: {} });
                })
                .catch((reason) => {
                    return newState(state, { currentUser: action.payload.afAuth.auth.currentUser, error: reason });
                })

        default:
            return state;
    }
}
