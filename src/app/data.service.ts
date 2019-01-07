import { Injectable } from '@angular/core';
import { KeyRegistry } from '@angular/core/src/di/reflective_key';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
    this.quesGenOption = { maximum_question: 10, show_title: true };
    this.navState = { canEnterBeforeStart: true, testing: false, testFinish: false };
  }

  public catMatrix: Array<Array<boolean>>;
  public imageLink: Array<any>;
  public config: Array<any>;
  public selectedQuestions: Array<any>;
  public quesGenOption: {
    maximum_question: 10,
    show_title: true
  };
  public testResult: Array<any>;
  public navState: {};

  getConfig(key) {
    for (let i = 0; i < this.config.length; i++) {
      if (this.config[i].key == key)
        return this.config[i].value;
    }
  }

}
