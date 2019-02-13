import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Question from '../states/models/question.model';
import { Store } from '@ngrx/store';
import IAppState from '../IAppState';

import * as QuestionAction from '../states/actions/question.action';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  question$: Observable<Question>;
  question: Question;
  constructor(private store: Store<IAppState>) {
    this.question$ = store.select('question');
    this.store.dispatch(new QuestionAction.Fetch());
    this.question$.subscribe((payload) => {
      this.question = payload;
    })
  }
}
