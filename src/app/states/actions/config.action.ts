import { Action } from '@ngrx/store';

export const FETCH = '[Config] Fetch';
export const FETCH_SUCCESS = '[Config] Fetch -> Success';
export const FETCH_FAILED = '[Config] Fetch -> Failed';

export class Fetch implements Action {
    readonly type = FETCH;
    constructor() { }
}

export class FetchSuccess implements Action {
    readonly type = FETCH_SUCCESS;
    constructor(public payload: { system: any }) { }
}

export class FetchFailed implements Action {
    readonly type = FETCH_FAILED;
    constructor(public payload: { message: string }) { }
}

export type All = Fetch
    | FetchSuccess
    | FetchFailed;