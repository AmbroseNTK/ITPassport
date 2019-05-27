import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable, of, from } from 'rxjs';

import * as UserAction from '../actions/user.actions';
import { catchError, map, mergeMap, switchMap, tap, exhaustMap, concatMap } from 'rxjs/operators';
import { DataService } from '../../data.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserType } from '../../UserType';
import { User } from '../models/user.model';
import { emit } from 'cluster';
import { GetInfoFailed } from '../actions/user.actions';
import { SyslogService } from '../../services/syslog.service';

export type Action = UserAction.All;

@Injectable()
export class UserEffects {
    constructor(private actions: Actions,
        private afAuth: AngularFireAuth,
        private dataService: DataService,
        private userService: UserService,
        private db: AngularFireDatabase,
        private log: SyslogService,
        private router: Router) {
    }

    @Effect()
    login: Observable<Action> = this.actions.pipe(
        ofType(UserAction.LOGIN),
        map((action: UserAction.Login) => action.payload),
        mergeMap((payload) =>
            from(this.afAuth.auth.signInWithEmailAndPassword(payload.email, payload.password))
                .pipe(
                    map(respone => {
                        this.log.write("Login -> Success");
                        return new UserAction.LoginSuccess({ currentUser: this.afAuth.auth.currentUser })
                    }),
                    catchError((err) => {
                        this.router.navigate(["/"]);
                        this.log.write("Login -> Failed");
                        return of(new UserAction.LoginFailed(err))
                    }
                    )
                )
        )
    );

    @Effect()
    loginSuccess: Observable<Action> = this.actions.pipe(
        ofType(UserAction.LOGIN_SUCCESS),
        map((action: UserAction.LoginSuccess) => new UserAction.GetInfo({ email: action.payload.currentUser.email, annonymous: this.dataService.config['annonymous_mode'] }))
    )

    @Effect({ dispatch: false })
    signOut: Observable<Action> = this.actions.pipe(
        ofType(UserAction.SIGNOUT),
        tap(() => {
            this.router.navigate(["/"]);
        })
    )


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
    );

    @Effect()
    getInfo: Observable<Action> = this.actions.pipe(
        ofType(UserAction.GETINFO),
        map((action: UserAction.GetInfo) => action.payload),
        switchMap((payload) => from(this.db.list('users/' + payload.email.replace(/\./g, '&') + '/').snapshotChanges())
            .pipe(
                map((changes) => {
                    console.log(changes);
                    if (changes.length !== 0) {
                        let data = {};
                        for (let i = 0; i < changes.length; i++) {
                            data[changes[i].key] = changes[i].payload.val();
                        }
                        return new UserAction.GetInfoSuccess({ data: data });
                    }
                    let obj = {};
                    obj[this.afAuth.auth.currentUser.email.replace(/\./g, '&')] = {
                        'credits': this.dataService.config['default_point'],
                        'role': payload.annonymous ? UserType.NORMAL : UserType.INACTIVATED,
                        'log': { 'dummy': 0 }
                    };
                    this.db.object('users/').update(obj);
                    return new UserAction.GetInfoSuccess({ data: obj });
                }
                ),
                catchError((error) => {
                    return of(new GetInfoFailed())
                })
            ))
    );

    @Effect()
    updateCredit: Observable<Action> = this.actions.pipe(
        ofType(UserAction.UPDATE_CREDIT),
        map((action: UserAction.UpdateCredit) => action.payload),
        switchMap((payload) => this.db.object('users/' + payload.email.replace(/\./g, '&')).update(payload.data)),
        mergeMap(() => {
            if (this.userService.getPayType() == this.userService.PAY_FOR_QUESTION) {
                this.log.write("Used credit(s) for questions");
                this.router.navigate(['/test-room']);
            }
            return of(new UserAction.UpdateCreditSuccess())
        }),
        catchError(() => of(new UserAction.UpdateCreditFailed()))
    )

    @Effect()
    updateLog: Observable<Action> = this.actions.pipe(
        ofType(UserAction.UPDATE_LOG),
        map((action: UserAction.UpdateLog) => action.payload),
        switchMap((payload) => this.db.object('users/' + this.afAuth.auth.currentUser.email.replace(/\./g, '&')).update(payload.data)),
        map(() => {
            this.router.navigate(['/test-result']);
            return new UserAction.UpdateLogSuccess()
        }),
        catchError(() => of(new UserAction.UpdateLogFailed()))
    )

}
