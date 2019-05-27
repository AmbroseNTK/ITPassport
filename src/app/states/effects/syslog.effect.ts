import * as SysLogAction from '../actions/syslog.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of, from } from 'rxjs';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

export type Action = SysLogAction.All;

@Injectable()
export class SysLogEffects {
    constructor(private actions: Actions, private db: AngularFireDatabase, private afAuth: AngularFireAuth) { }

    @Effect()
    write: Observable<Action> = this.actions.pipe(
        ofType(SysLogAction.WRITE),
        map((action: SysLogAction.Write) => {
            from(this.db.list('syslog/').push({
                "date": Date.now(),
                "user": this.afAuth.auth.currentUser.uid,
                "content": action.payload.message
            })).pipe(
                map(respone => new SysLogAction.WriteSuccess()),
                catchError(err => of(new SysLogAction.WriteFailed()))
            )
            return new SysLogAction.WriteSuccess();
        })
}