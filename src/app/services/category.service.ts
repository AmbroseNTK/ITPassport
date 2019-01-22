import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import IAppState from '../IAppState';

import * as CategoryAction from '../states/actions/category.action';
import { Category } from '../states/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  category$: Observable<Category>;
  category: Category;

  constructor(store: Store<IAppState>) {
    this.category$ = store.select('category');
    store.dispatch(new CategoryAction.Fetch());
    this.category$.subscribe((payload) => {
      this.category = payload;
    })
  }

  private selectedKey;

  public selectCategory(key) {
    this.selectedKey = key;
  }

  public getSelectedCategory() {
    return this.category['cat'][this.selectedKey];
  }

  public getCategoryTree(initLeaf) {
    let majorCat = Object.keys(this.category['cat']);
    let logByCat = {};
    for (let i = 0; i < majorCat.length; i++) {
      let minorCat = Object.keys(this.category['cat'][majorCat[i]]);
      let logMinor = {};
      for (let j = 0; j < minorCat.length; j++) {
        if (minorCat[j] != 'title') {
          logMinor[minorCat[j]] = initLeaf;
        }
      }
      logByCat[majorCat[i]] = logMinor;
    }
    return logByCat;
  }

}
