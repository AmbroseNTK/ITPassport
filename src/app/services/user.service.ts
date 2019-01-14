import { Injectable } from '@angular/core';
import IAppState from '../IAppState';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../states/models/user.model';
import * as UserAction from '../states/actions/user.actions';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  user$: Observable<User>;

  constructor(private store: Store<IAppState>, private dataService: DataService) {
    this.user$ = store.select('user');
    this.user$.subscribe((payload) => {
      this.user = payload;
    })
  }

  public addCredits(amount: number) {
    this.store.dispatch(new UserAction.UpdateCredit({
      data: this.user.data,
      amount: amount,
      email: this.user.currentUser.email
    }));
  }

  public isEnoughCredit() {
    return this.user.data.credits >= this.dataService.config['price'];
  }

}
