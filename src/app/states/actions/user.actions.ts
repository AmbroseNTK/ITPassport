
import { Action } from '@ngrx/store';
import { c } from 'tar';

export const LOGIN = '[User] Login';
export const LOGIN_SUCCESS = '[User] Login -> Success';
export const LOGIN_FAILED = '[User] Login -> Failed';
export const SIGNIN = '[User] SignIn';
export const SIGNIN_SUCCESS = '[User] Sign in -> Success';
export const SIGNIN_FAILED = '[User] Sign in -> Failed';
export const SIGNOUT = '[User] Sign out';
export const UPDATEINFO = '[User] Update info';
export const GETINFO = '[User] Get info';
export const GETINFO_SUCCESS = '[User] Get info -> Success';
export const GETINFO_FAILED = '[User] Get info -> Failed';
export const EDITINFO = '[User] EditInfo';
export const EDITINFO_SUCCESS = '[User] EditInfo -> Success';
export const EDITINFO_FAILED = '[User] EditInfo -> Failed';
export const FORGOT_PASSWORD = '[User] Forgot password';
export const FORGOT_PASSWORD_SENT_SUCCESS = '[User] Forgot password -> Sent Success';
export const FORGOT_PASSWORD_SENT_FAILED = '[User] Forgot password -> Sent Failed';
export const INIT_INFO = '[User] Init information';
export const UPDATE_CREDIT = '[User] Update credit';
export const UPDATE_CREDIT_SUCCESS = "[User] Update credit -> Success";
export const UPDATE_CREDIT_FAILED = "[User] Update credit -> Failed";
export const PAY_CREDITS = '[User] Pay credits';
export const PAY_CREDITS_SUCCESS = '[User] Pay credits -> Success';
export const REMOVE_CREDITS = '[User] Remove credits';
export const NO_MORE_CREDITS = '[User] No more credits';
export const UPDATE_LOG = "[User] Update log";
export const UPDATE_LOG_SUCCESS = "[User] Update log -> Success";
export const UPDATE_LOG_FAILED = "[User] Update log -> Failed";


export class Login implements Action {
    readonly type = LOGIN;
    constructor(public payload: { email: string, password: string }) { }
}

export class LoginSuccess implements Action {
    readonly type = LOGIN_SUCCESS;
    constructor(public payload: { currentUser: any }) { }
}

export class LoginFailed implements Action {
    readonly type = LOGIN_FAILED;
    constructor(public payload: { message: string }) { }
}

export class SignOut implements Action {
    readonly type = SIGNOUT;
    constructor() { }
}

export class SignIn implements Action {
    readonly type = SIGNIN;
    constructor(public payload: { email: string, password: string, retypePassword: string, agreeTerm: boolean }) { }
}

export class SignInSuccess implements Action {
    readonly type = SIGNIN_SUCCESS;
    constructor() { }
}

export class SignInFailed implements Action {
    readonly type = SIGNIN_FAILED;
    constructor(public payload: { message: string }) { }
}

export class UpdateInfo implements Action {
    readonly type = UPDATEINFO;
    constructor(public payload: { name: string, address: string, phone: string }) { }
}

export class GetInfo implements Action {
    readonly type = GETINFO;
    constructor(public payload: { email: string, annonymous: boolean }) { }
}

export class GetInfoSuccess implements Action {
    readonly type = GETINFO_SUCCESS;
    constructor(public payload: { data: any }) { }
}

export class GetInfoFailed implements Action {
    readonly type = GETINFO_FAILED;
    constructor() { }
}

export class EditInfo implements Action {
    readonly type = EDITINFO;
    constructor(public payload: { newName: string, newPhone: string }) { }
}

export class EditInfoSuccess implements Action {
    readonly type = EDITINFO_SUCCESS;
    constructor() { }
}

export class EditInfoFailed implements Action {
    readonly type = EDITINFO_FAILED;
    constructor() { }
}

export class ForgotPassword implements Action {
    readonly type = FORGOT_PASSWORD;
    constructor(public payload: { email: string }) { }
}

export class ForgotPasswordSentSuccess implements Action {
    readonly type = FORGOT_PASSWORD_SENT_SUCCESS;
    constructor() { }
}

export class ForgotPasswordSentFailed implements Action {
    readonly type = FORGOT_PASSWORD_SENT_FAILED;
    constructor() { }
}

export class InitInfo implements Action {
    readonly type = INIT_INFO;
    constructor(public payload: { userEmail: string }) { }
}

export class UpdateCredit implements Action {
    readonly type = UPDATE_CREDIT;
    constructor(public payload: { data: any, email: string, amount: number }) { }
}

export class UpdateCreditSuccess implements Action {
    readonly type = UPDATE_CREDIT_SUCCESS;
    constructor() { }
}

export class UpdateCreditFailed implements Action {
    readonly type = UPDATE_CREDIT_FAILED;
    constructor() { }
}

export class PayCredits implements Action {
    readonly type = PAY_CREDITS;
    constructor(public payload: { data: any, email: string, amount: number }) { }
}

export class PayCreditsSuccess implements Action {
    readonly type = PAY_CREDITS_SUCCESS;
    constructor() { }
}

export class UpdateLog implements Action {
    readonly type = UPDATE_LOG;
    constructor(public payload: { data: any, timestamp: any, log: any }) { }
}

export class UpdateLogSuccess implements Action {
    readonly type = UPDATE_LOG_SUCCESS;
    constructor() { }
}

export class UpdateLogFailed implements Action {
    readonly type = UPDATE_LOG_FAILED;
    constructor() { }
}


export type All
    = Login
    | LoginSuccess
    | LoginFailed
    | UpdateInfo
    | GetInfo
    | GetInfoSuccess
    | GetInfoFailed
    | EditInfo
    | EditInfoSuccess
    | EditInfoFailed
    | SignIn
    | SignInSuccess
    | SignInFailed
    | SignOut
    | ForgotPassword
    | ForgotPasswordSentSuccess
    | ForgotPasswordSentFailed
    | InitInfo
    | UpdateCredit
    | UpdateCreditSuccess
    | UpdateCreditFailed
    | PayCredits
    | PayCreditsSuccess
    | UpdateLog
    | UpdateLogSuccess
    | UpdateLogFailed;