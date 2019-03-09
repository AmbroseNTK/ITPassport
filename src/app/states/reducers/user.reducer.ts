import { User } from '../models/user.model';
import * as UserAction from '../actions/user.actions';

export type Action = UserAction.All;

/// Default app state
const defaultState: User = {
    currentUser: {},
    error: false,
    signing: false,
    registration: {
        hasError: false,
        message: ''
    },
    data: {},
};

/// Reducer function
export function userReducer(state: User = defaultState, action: Action) {
    switch (action.type) {
        case UserAction.LOGIN:
            return { ...state, signing: true };
        case UserAction.LOGIN_SUCCESS:
            return { ...state, currentUser: action.payload.currentUser, signing: false, error: false };
        case UserAction.LOGIN_FAILED:
            return { ...state, signing: false, error: true };
        case UserAction.SIGNIN_SUCCESS:
            return { ...state, registration: { hasError: false, message: '' } };
        case UserAction.SIGNIN_FAILED:
            return { ...state, registration: { hasError: true, message: action.payload.message } };
        case UserAction.GETINFO_SUCCESS:
            return { ...state, data: action.payload.data };

        case UserAction.UPDATE_CREDIT:
            let updateCredit = action.payload.data;
            updateCredit['credits'] += action.payload.amount;
            return { ...state, data: updateCredit }

        case UserAction.UPDATE_LOG:
            let updateLog = action.payload.data;
            updateLog.log[action.payload.timestamp] = action.payload.log;
            return { ...state, data: updateLog }

        default:
            return state;
    }
}
