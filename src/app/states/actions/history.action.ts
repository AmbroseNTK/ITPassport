import { Action } from '@ngrx/store';

export const FETCH = "[History] Fetch";
export const FETCH_SUCCESS = "[History] Fetch Success";

export class Fetch implements Action {
    readonly type = FETCH;
    constructor() { }
}

export class FetchSuccess implements Action {
    readonly type = FETCH_SUCCESS;
    constructor(public payload: { log: any }) { }
}

export type All = Fetch
    | FetchSuccess;