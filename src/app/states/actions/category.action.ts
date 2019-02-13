import { Action } from '@ngrx/store';

export const FETCH = "[Category] Fetch";
export const FETCH_SUCCESS = "[Category] Fetch -> Success";
export const FETCH_FAILED = "[Category] Fetch -> Failed";
export class Fetch implements Action {
    readonly type = FETCH;
    constructor() { }
}
export class FetchSuccess implements Action {
    readonly type = FETCH_SUCCESS;
    constructor(public payload: { cat: any }) { }
}

export class FetchFailed implements Action {
    readonly type = FETCH_FAILED;
}
export type All = Fetch
    | FetchSuccess
    | FetchFailed;