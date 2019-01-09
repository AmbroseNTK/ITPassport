import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

/**
 * Protect the router: User cannot leave test room until they finish the test
 */
@Injectable({
  providedIn: 'root'
})
export class InTestGuard implements CanDeactivate<any> {
  constructor(private dataService: DataService) { }

  canDeactivate(
    component: any,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return !this.dataService.navState['testing'];
  }

}
