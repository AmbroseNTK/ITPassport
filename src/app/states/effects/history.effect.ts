import { Injectable } from "@angular/core";

import * as HistoryAction from '../actions/history.action'
import { Effect, ofType } from "@ngrx/effects";
import { Observable } from "rxjs";
import { Actions } from '@ngrx/effects';
import { AngularFireDatabase } from '@angular/fire/database';
import { Action } from '@ngrx/store';
import { mergeMap, map, switchMap } from "rxjs/operators";
import { AngularFireAuth } from "@angular/fire/auth";


@Injectable()
export default class HistoryEffects {
    constructor(private actions: Actions, private db: AngularFireDatabase, private afAuth: AngularFireAuth) { }

    @Effect()
    fetchLog: Observable<Action> = this.actions.pipe(
        ofType(HistoryAction.FETCH),
        switchMap(() => this.db.list('users/' + this.afAuth.auth.currentUser.email.replace('.', '&') + '/log/').snapshotChanges()),
        map((changes) => {
            let rawLog = changes.map((value) => ({ key: value.key, value: value.payload.val() }));
            let log = {};
            let keys = Object.keys(rawLog);
            for (let i = 0; i < keys.length; i++) {
                log[keys[i]] = rawLog[i].value;
            }
            return new HistoryAction.FetchSuccess({ log: log });
        })
    )

    @Effect()
    fetchGenerated: Observable<Action> = this.actions.pipe(
        ofType(HistoryAction.FETCH_GENERATED_LOG),
        switchMap(() => this.db.list('users/' + this.afAuth.auth.currentUser.email.replace('.', '&') + '/generated/').snapshotChanges()),
        map((changes) => {
            let rawGenerated = changes.map((value) => ({ key: value.key, value: value.payload.val() }));
            let generated = {};
            let keys = Object.keys(rawGenerated);
            for (let i = 0; i < keys.length; i++) {
                generated[keys[i]] = rawGenerated[i].value;
            }
            return new HistoryAction.FetchGeneratedLogSuccess({ generated: generated });
        })
    )

    @Effect()
    updateGeneratedLog: Observable<Action> = this.actions.pipe(
        ofType(HistoryAction.UPDATE_GENERATED_LOG),
        map((action: HistoryAction.UpdateGeneratedLog) => action.payload),
        switchMap((payload) => {
            let updation = {};
            updation[payload.questionID] = 1;
            return this.db.object('users/' + this.afAuth.auth.currentUser.email.replace('.', '&') + '/generated/' + payload.major + '/' + payload.minor + '/')
                .update(updation);
        }),
        map(() => new HistoryAction.UpdateGeneratedLogSuccess())
    )
}