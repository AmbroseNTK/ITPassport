import * as CategoryAction from '../actions/category.action';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { map, mergeMap } from 'rxjs/operators';

export type Action = CategoryAction.All;

@Injectable()
export class CategoryEffects {
    constructor(private actions: Actions, private db: AngularFireDatabase) { }

    @Effect()
    fetch: Observable<Action> = this.actions.pipe(
        ofType(CategoryAction.FETCH),
        mergeMap(() => this.db.list('titles/').snapshotChanges()),
        map((changes) => {
            let categories = changes.map((value) => ({ key: value.key, payload: value.payload.val() }));
            let cat = {};
            for (let i = 0; i < categories.length; i++) {
                cat[categories[i].key] = categories[i].payload;
            }
            return new CategoryAction.FetchSuccess({ cat: cat });
        })
    );

}