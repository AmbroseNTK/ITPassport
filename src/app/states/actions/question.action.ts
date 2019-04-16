

import { Action } from '@ngrx/store';

export const FETCH = "[Question] Fetch";
export const FETCH_SUCCESS = "[Question]  Fetch -> Success";
export const FETCH_FAILED = "[Question] Fetch -> Failed";
export const GENERATE = "[Question] Generate";
export const GENERATE_SUCCESS = "[Question] Generate -> Success";
export const GENERATE_FAILED = "[Question] Generate -> Failed";

export class Fetch implements Action {
    readonly type = FETCH;
    constructor() { }
}

export class FetchSuccess implements Action {
    readonly type = FETCH_SUCCESS;
    constructor(public payload: { list: any }) { }
}

export class FetchFailed implements Action {
    readonly type = FETCH_FAILED;
    constructor() { }
}

export class Generate implements Action {
    readonly type = GENERATE;
    constructor(public payload: { categories: Array<string>, quantity: number }) { }
}

export class GenerateSuccess implements Action {
    readonly type = GENERATE_SUCCESS;
    constructor() { }
}

export class GenerateFailed implements Action {
    readonly type = GENERATE_FAILED;
    constructor() { }
}

export type All = Fetch
    | FetchSuccess
    | FetchFailed
    | Generate
    | GenerateSuccess
    | GenerateFailed;