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
  constructor(private store: Store<IAppState>) {
    this.history$ = store.select('history');
    this.store.dispatch(new HistoryAction.Fetch());
    this.history$.subscribe((payload) => {
      this.history = payload;

    })
    //this.store.dispatch(new HistoryAction.FetchGeneratedLog());
  }

  getSubCatPercent(subCatID) {

  }

  setCategoryService(categoryService: CategoryService) {
    this.logByCat = categoryService.getCategoryTree({ correct: 0, incorrect: 0 });
  }

  writeGeneratedLog(data: Array<{}>) {
    let keys = Object.keys(data);
    for (let i = 0; i < data.length; i++) {

      let cat = data[i]['category'].split('.');

      this.store.dispatch(new HistoryAction.UpdateGeneratedLog({ major: parseInt(cat[0]), minor: parseInt(cat[1]), questionID: keys[i] }));
    }
  }

}
