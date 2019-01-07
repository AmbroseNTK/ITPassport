import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.page.html',
  styleUrls: ['./test-result.page.scss'],
})
export class TestResultPage implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  percent = 0;
  resultList: Array<any>;

  goBack() {
    this.router.navigate(['main/account']);
  }

  ngOnInit() {
    this.resultList = new Array<any>();
    for (let i = 0; i < this.dataService.selectedQuestions.length; i++) {
      this.resultList.push({
        correct: this.dataService.selectedQuestions[i]['Correct'].toLowerCase() === this.dataService.testResult[i].toLowerCase(),
        question: this.dataService.selectedQuestions[i]
      });
    }
    let correctNum = this.resultList.filter((value, index, array) => value.correct).length;
    this.percent = correctNum / this.dataService.selectedQuestions.length * 100;
  }

}
