import * as SysLogAction from '../actions/syslog.actions';
import SysLog from '../models/syslog.model';

export type Action = SysLogAction.All;

const defaultSysLog = {
    log: {}
}

export function syslogReducer(state: SysLog = defaultSysLog, action: Action) {
    switch (action.type) {
        case SysLogAction.WRITE:
            return state;
        case SysLogAction.WRITE_SUCCESS:
            return state;
        case SysLogAction.WRITE_FAILED:
            return state;
        default:
            return state;
    }
}