import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { Observable, of, from } from 'rxjs';

import * as ConfigAction from '../actions/config.action';
import { catchError, map, mergeMap, switchMap, delay, tap } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';

export type Action = ConfigAction.All;

@Injectable()
export class ConfigEffects {
    constructor(private actions: Actions, private db: AngularFireDatabase) { }

    @Effect()
    fetch: Observable<Action> = this.actions.pipe(
        ofType(ConfigAction.FETCH),
        mergeMap(() => this.db.list('config/').snapshotChanges()),
        map(changes => {
            let config = changes.map((value) => ({ key: value.key, payload: value.payload.val() }))
            return new ConfigAction.FetchSuccess({ system: config });
        }),
        catchError(err => of(new ConfigAction.FetchFailed(err.message)))
    );
}