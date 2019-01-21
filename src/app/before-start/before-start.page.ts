import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { TimeService } from '../services/time.service';

@Component({
  selector: 'app-before-start',
  templateUrl: './before-start.page.html',
  styleUrls: ['./before-start.page.scss'],
})
export class BeforeStartPage implements OnInit {

  constructor(private dataService: DataService, private router: Router, private userService: UserService, private timeService: TimeService) {
    this.isEnoughCredit = this.userService.isEnoughCredit();
  }

  isEnoughCredit = false;

  ngOnInit() {
  }

  start() {
    if (this.userService.isEnoughCredit()) {

      this.userService.addCredits(-this.dataService.config['price'], this.userService.PAY_FOR_QUESTION);
      this.dataService.navState['canEnterBeforeStart'] = false;
      this.dataService.navState['testing'] = true;
      this.dataService.navState['testFinish'] = false;
      this.timeService.resetTimer();
      this.timeService.startTimer();

    }
    else {

    }
  }

  goBack() {
    this.router.navigate(['/main/account']);
  }

}