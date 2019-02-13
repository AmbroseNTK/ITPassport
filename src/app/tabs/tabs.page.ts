import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserType } from '../UserType';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  constructor(private userService: UserService) { }
  public isInactivated() {
    if (this.userService.getRole() != undefined) {
      return this.userService.getRole() == UserType.INACTIVATED;
    }
    return true;
  }
}
