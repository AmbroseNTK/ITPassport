import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import IAppState from '../IAppState';
import History from '../states/models/history.model';
import * as HistoryAction from '../states/actions/history.action';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  history$: Observable<History>;
  history: History;
  logByCat;
  constructor(private store: Store<IAppState>, private categoryService: CategoryService) {

    this.logByCat = this.categoryService.getCategoryTree({ correct: 0, incorrect: 0 });
    this.history$ = store.select('history');
    this.store.dispatch(new HistoryAction.Fetch());
    this.history$.subscribe((payload) => {
      this.history = payload.log;

    })
  }

  getSubCatPercent(subCatID) {

  }

}
