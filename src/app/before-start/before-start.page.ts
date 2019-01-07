import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-before-start',
  templateUrl: './before-start.page.html',
  styleUrls: ['./before-start.page.scss'],
})
export class BeforeStartPage implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  start() {
    this.dataService.navState['canEnterBeforeStart'] = false;
    this.dataService.navState['testing'] = true;
    this.dataService.navState['testFinish'] = false;
    this.router.navigate(['/test-room']);
  }

}
