import { User } from '../models/user.model';
import * as UserAction from '../actions/user.actions';

export type Action = UserAction.All;

/// Default app state
const defaultState: User = {
    currentUser: {},
    error: true,
    signing: false,
    registration: {
        hasError: false,
        message: ''
    },
    data: {}
};

/// Reducer function
export function userReducer(state: User = defaultState, action: Action) {
    switch (action.type) {
        case UserAction.LOGIN:
            return { ...state, signing: true };
        case UserAction.LOGIN_SUCCESS:
            return { currentUser: action.payload.currentUser, signing: false, error: false };
        case UserAction.LOGIN_FAILED:
            return { ...state, signing: false, error: true };
        case UserAction.SIGNIN_SUCCESS:
            return { ...state, registration: { hasError: false, message: '' } };
        case UserAction.SIGNIN_FAILED:
            return { ...state, registration: { hasError: true, message: action.payload.message } };
        case UserAction.GETINFO_SUCCESS:
            return { ...state, data: action.payload.data };
        default:
            return state;
    }
}
