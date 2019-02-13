import { Injectable } from '@angular/core';
import IAppState from '../IAppState';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../states/models/user.model';
import * as UserAction from '../states/actions/user.actions';
import { DataService } from '../data.service';
import { HistoryService } from './history.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  user$: Observable<User>;

  private historyService: HistoryService;

  private payType;

  PAY_FOR_QUESTION = "PAY_FOR_QUESTION";
  ADD_MORE_CREDITS = "ADD MORE CREDITS";

  constructor(
    private store: Store<IAppState>,
    private dataService: DataService) {
    this.user$ = store.select('user');
    this.user$.subscribe((payload) => {
      this.user = payload;
    })
  }

  public setHistoryService(historyService: HistoryService) {
    this.historyService = historyService;
  }

  public getPayType() {
    return this.payType;
  }

  public addCredits(amount: number, type: string) {
    this.payType = type;
    this.store.dispatch(new UserAction.UpdateCredit({
      data: this.user.data,
      amount: amount,
      email: this.user.currentUser.email
    }));
  }

  public isEnoughCredit() {
    return this.user.data.credits >= this.dataService.config['price'];
  }

  public getRole() {
    if (this.user.data.role != undefined) {
      return this.user.data.role;
    }
    return undefined;
  }

  public writeLog(time, correct, incorrect) {
    this.store.dispatch(new UserAction.UpdateLog({
      data: this.user.data,
      timestamp: Date.now(),
      log: {
        'time': time,
        'correct': correct,
        'incorrect': incorrect
      }
    }))
    this.historyService.writeGeneratedLog(correct);
    this.historyService.writeGeneratedLog(incorrect);
  }

}
