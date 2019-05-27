import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import IAppState from '../IAppState';
import * as SysLogActions from '../states/actions/syslog.actions';

@Injectable({
  providedIn: 'root'
})
export class SyslogService {
  constructor(private store: Store<IAppState>) {

  }

  public write(message: string) {
    this.store.dispatch(new SysLogActions.Write({ message: message }));
  }
}
