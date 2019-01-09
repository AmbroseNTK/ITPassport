import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

/**
 * Protect the router: Deny user go back to test room after they finish it
 */
@Injectable({
  providedIn: 'root'
})
export class OnFinishTestGuard implements CanActivate {
  constructor(private dataService: DataService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return !this.dataService.navState['testFinish'];
  }
}
