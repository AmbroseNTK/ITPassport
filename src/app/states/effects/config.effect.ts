import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { Observable, of, from } from 'rxjs';

import * as ConfigAction from '../actions/config.action';
import { catchError, map, mergeMap, switchMap, delay, tap } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

export type Action = ConfigAction.All;

@Injectable()
export class ConfigEffects {
    constructor(private actions: Actions, private db: AngularFireDatabase, private router: Router) { }

    @Effect()
    fetch: Observable<Action> = this.actions.pipe(
        ofType(ConfigAction.FETCH),
        mergeMap(() => this.db.list('config/').snapshotChanges()),
        map(changes => {
            let raw = changes.map((value) => ({ key: value.key, payload: value.payload.val() }))
            let config = {};
            for (let i = 0; i < raw.length; i++) {
                config[raw[i].key] = raw[i].payload;
            }
            if (config['is_obsolete']) {
                this.router.navigate(['/']);
            }
            return new ConfigAction.FetchSuccess({ system: config });
        }),
        catchError(err => of(new ConfigAction.FetchFailed(err.message)))
    );
}