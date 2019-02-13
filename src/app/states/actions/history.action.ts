import { Action } from '@ngrx/store';

export const FETCH = "[History] Fetch";
export const FETCH_SUCCESS = "[History] Fetch Success";
export const FETCH_GENERATED_LOG = "[History] Fetch generated log";
export const FETCH_GENERATED_LOG_SUCCESS = "[History] Fetch generated log -> Success";
export const UPDATE_GENERATED_LOG = "[History] Update generated log";
export const UPDATE_GENERATED_LOG_SUCCESS = "[History] Update generated log -> Success";
export const UPDATE_GENERATED_LOG_FAILED = "[History] Update generated log -> Failed";

export class Fetch implements Action {
    readonly type = FETCH;
    constructor() { }
}

export class FetchSuccess implements Action {
    readonly type = FETCH_SUCCESS;
    constructor(public payload: { log: any }) { }
}

export class FetchGeneratedLog implements Action {
    readonly type = FETCH_GENERATED_LOG;
    constructor() { }
}

export class FetchGeneratedLogSuccess implements Action {
    readonly type = FETCH_GENERATED_LOG_SUCCESS;
    constructor(public payload: { generated: any }) { }
}

export class UpdateGeneratedLog implements Action {
    readonly type = UPDATE_GENERATED_LOG;
    constructor(public payload: { major: number, minor: number, questionID: string }) { }
}

export class UpdateGeneratedLogSuccess implements Action {
    readonly type = UPDATE_GENERATED_LOG_SUCCESS;
    constructor() { }
}


export type All = Fetch
    | FetchSuccess
    | FetchGeneratedLog
    | FetchGeneratedLogSuccess
    | UpdateGeneratedLog
    | UpdateGeneratedLogSuccess;