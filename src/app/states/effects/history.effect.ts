import { Injectable } from "@angular/core";

import * as HistoryAction from '../actions/history.action'
import { Effect, ofType } from "@ngrx/effects";
import { Observable } from "rxjs";
import { Actions } from '@ngrx/effects';
import { AngularFireDatabase } from '@angular/fire/database';
import { Action } from '@ngrx/store';
import { mergeMap, map } from "rxjs/operators";
import { AngularFireAuth } from "@angular/fire/auth";


@Injectable()
export default class HistoryEffects {
    constructor(private actions: Actions, private db: AngularFireDatabase, private afAuth: AngularFireAuth) { }

    @Effect()
    fetch: Observable<Action> = this.actions.pipe(
        ofType(HistoryAction.FETCH),
        mergeMap(() => this.db.list('users/' + this.afAuth.auth.currentUser.email.replace('.', '&') + '/log/').snapshotChanges()),
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
}