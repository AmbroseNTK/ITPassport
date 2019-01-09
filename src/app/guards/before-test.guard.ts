import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

/**
 * Protect the router: Allow navigate to Before Start if not be in test
 */
@Injectable({
  providedIn: 'root'
})
export class BeforeTestGuard implements CanActivate {
  constructor(private dataService: DataService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.dataService.navState['canEnterBeforeStart'];
  }
}
