import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from './states/models/config.model';
import { Store } from '@ngrx/store';
import IAppState from './IAppState';
import * as ConfigAction from './states/actions/config.action';

/**
 * Store all common global data
 */
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private store: Store<IAppState>) {
    this.quesGenOption = { maximum_question: 10, show_title: true };
    this.navState = { canEnterBeforeStart: true, testing: false, testFinish: false };
    this.config$ = this.store.select('config');
    this.config$.subscribe((value) => {
      this.config = new Array<any>();
      this.config.push(value);
    });
  }

  public catMatrix: Array<Array<boolean>>;
  public imageLink: Array<any>;
  /**
   * App config from redux
   */
  private config$: Observable<Config>;
  /**
   * App config
   */
  public config: Array<any>;
  public selectedQuestions: Array<any>;
  public quesGenOption: {
    maximum_question: 10,
    show_title: true
  };
  public testResult: Array<any>;
  public navState: {};

  /**
   * Fetch app config from firebase
   */
  public fetchConfig() {
    this.store.dispatch(new ConfigAction.Fetch());
  }

  /**
   * Get value of config
   * @param key config name
   */
  getConfig(key) {
    for (let i = 0; i < this.config.length; i++) {
      if (this.config[i].key == key)
        return this.config[i].value;
    }
  }

}
