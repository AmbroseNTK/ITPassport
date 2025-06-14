
import { Action } from '@ngrx/store';

export const FETCH = "[Question] Fetch";
export const FETCH_SUCCESS = '[Question]  Fetch -> Success';

export class Fetch implements Action {
    readonly type = FETCH;
    constructor() { }
}

export class FetchSuccess implements Action {
    readonly type = FETCH_SUCCESS;
    constructor(public payload: { list: any }) { }
}

export type All = Fetch
    | FetchSuccess;