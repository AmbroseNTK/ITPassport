import { Action } from '@ngrx/store';

export const WRITE = "[Syslog] Write";
export const WRITE_SUCCESS = "[Syslog] Write -> Success";
export const WRITE_FAILED = "[Syslog] Write -> Failed";

export class Write implements Action {
    readonly type = WRITE;
    constructor(public payload: { message: string }) { }
}

export class WriteSuccess implements Action {
    readonly type = WRITE_SUCCESS;
    constructor() { }
}

export class WriteFailed implements Action {
    readonly type = WRITE_FAILED;
    constructor() { }
}

export type All = Write
    | WriteSuccess
    | WriteFailed;