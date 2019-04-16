import * as QuestionAction from '../actions/question.action';
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/database';
import { Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Actions } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';

export type Action = QuestionAction.All;

@Injectable()
export class QuestionEffects {
    constructor(private action: Actions, private db: AngularFireDatabase) { }

    @Effect()
    fetch: Observable<Action> = this.action.pipe(
        ofType(QuestionAction.FETCH),
        switchMap(() => this.db.list('questions/').snapshotChanges()),
        map((changes) => {
            let question = changes.map((value) => ({ key: value.key, payload: value.payload.val() }));
            let questionList = {};
            let cat = Object.keys(question);
            console.log(question);
            for (let i = 0; i < cat.length; i++) {
                questionList[question[i].key] = question[i].payload;
            }
            return new QuestionAction.FetchSuccess({ list: questionList });
        })
    )
}