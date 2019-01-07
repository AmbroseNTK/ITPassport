import { Action } from '@ngrx/store';
import { AngularFireAuth } from '@angular/fire/auth';

export const LOGIN = '[User] Login';
export const SIGNIN = '[User] SignIn';
export const SIGNOUT = '[User] SignOut';
export const UPDATEINFO = '[User] UpdateInfo'

export class Login implements Action {
    readonly type = LOGIN;
    constructor(public payload: { afAuth: AngularFireAuth, email: string, password: string }) { }
}

export class SignIn implements Action {
    readonly type = SIGNIN;
    constructor(public payload: { email: string, password: string, retypePassword: string, agreeTearm: boolean }) { }
}

export class UpdateInfo implements Action {
    readonly type = UPDATEINFO;
    constructor(public payload: { email: string, name: string, address: string, phone: string }) { }
}

export type All
    = Login
    | UpdateInfo
    | SignIn;