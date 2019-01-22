import { Config } from '../models/config.model';
import * as ConfigAction from '../actions/config.action';

export type Action = ConfigAction.All;

const defaultConfig = {
    system: {}
}

export function configReducer(state: Config = defaultConfig, action: Action) {
    switch (action.type) {
        case ConfigAction.FETCH_SUCCESS:
            return { ...state, system: action.payload.system };
        default:
            return state;
    }
}