import * as HistoryAction from '../actions/history.action';
import History from '../models/history.model';

export type Action = HistoryAction.All;

const defaultHistory = {
    log: {}
}

export function historyReducer(state: History = defaultHistory, action: Action) {
    switch (action.type) {
        case HistoryAction.FETCH_SUCCESS:
            return { ...state, log: action.payload.log };
    }
}