import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable, of, from } from 'rxjs';

import * as UserAction from '../actions/user.actions';
import { catchError, map, mergeMap, switchMap, delay } from 'rxjs/operators';

export type Action = UserAction.All;

@Injectable()
export class UserEffects {
    constructor(private actions: Actions, private afAuth: AngularFireAuth) {
    }

    @Effect()
    login: Observable<Action> = this.actions.pipe(
        ofType(UserAction.LOGIN),
        map((action: UserAction.Login) => action.payload),
        mergeMap((payload) =>
            from(this.afAuth.auth.signInWithEmailAndPassword(payload.email, payload.password))
                .pipe(
                    map(respone => new UserAction.LoginSuccess({ currentUser: this.afAuth.auth.currentUser })),
                    catchError((err) => of(new UserAction.LoginFailed(err)
                    ))
                )
        )
    );

    @Effect()
    editInfo: Observable<Action> = this.actions.pipe(
        ofType(UserAction.EDITINFO),
        map((action: UserAction.EditInfo) => action.payload),
        mergeMap((payload) =>
            from(this.afAuth.auth.currentUser.updateProfile({ displayName: payload.newName, photoURL: '' })
            ).pipe(
                map(respone => new UserAction.EditInfoSuccess()),
                catchError(err => of(new UserAction.EditInfoFailed()))
            )
        )
    );

    @Effect()
    signIn: Observable<Action> = this.actions.pipe(
        ofType(UserAction.SIGNIN),
        map((action: UserAction.SignIn) => action.payload),
        mergeMap((payload) => {
            if (payload.password === payload.retypePassword && payload.password != undefined) {
                if (payload.agreeTerm) {
                    return from(this.afAuth.auth.createUserWithEmailAndPassword(payload.email, payload.password))
                        .pipe(
                            map(respone => new UserAction.SignInSuccess()),
                            catchError(err => of(new UserAction.SignInFailed({ message: 'Cannot create new account' })))
                        )
                }
                return of(new UserAction.SignInFailed({ message: 'Please read and agree with terms and conditions' }));
            }
            return of(new UserAction.SignInFailed({ message: 'Your password is incorrect' }));
        })
    );

    @Effect()
    forgotPassword: Observable<Action> = this.actions.pipe(
        ofType(UserAction.FORGOT_PASSWORD),
        map((action: UserAction.ForgotPassword) => action.payload),
        switchMap((payload) => from(this.afAuth.auth.sendPasswordResetEmail(payload.email))
            .pipe(
                map(respone => new UserAction.ForgotPasswordSentSuccess()),
                catchError(err => of(new UserAction.ForgotPasswordSentFailed()))
            )
        )
    )
}
