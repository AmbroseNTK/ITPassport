import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { IonSlides, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-test-room',
  templateUrl: './test-room.page.html',
  styleUrls: ['./test-room.page.scss'],
})
export class TestRoomPage implements OnInit {

  constructor(private dataService: DataService, private toastController: ToastController, private router: Router) {
    this.numOfQuestion = this.dataService.quesGenOption.maximum_question;
    this.show_title = this.dataService.quesGenOption.show_title;
    this.answers = new Array<string>();
    for (let i = 0; i < this.numOfQuestion; i++) {
      this.answers.push('A');
    }
    this.questionList = this.dataService.selectedQuestions;
    this.questionList.sort(() => Math.random() - 0.5);
    this.questionList = this.questionList.slice(0, this.numOfQuestion);
    this.dataService.selectedQuestions = this.questionList;
    this.imageMapping();
  }


  @ViewChild(IonSlides) slides: IonSlides;

  slideOpts = {
    effect: 'flip'
  };

  questionList: Array<any>;

  currentIndex = 0;

  numOfQuestion = 10;

  show_title = true;
  answers: Array<string>;

  ngOnInit() {

  }

  slideChanged() {
    this.slides.getActiveIndex().then((value) => {
      this.currentIndex = value;
    });
  }

  submit() {
    this.dataService.navState['testing'] = false;
    this.dataService.navState['testFinish'] = true;
    this.dataService.testResult = this.answers;
    this.router.navigate(['/test-result']);
  }

  selectAnswer(index, value) {
    this.answers[index] = value;
    this.showToast(this.questionList[index][value]);
  }

  async showToast(text) {
    if (text.length > 50) {
      const toast = await this.toastController.create({
        message: text,
        position: 'top',
        animated: true,
        duration: 3000
      });
      toast.present();
    }
  }

  imageMapping() {
    let re = /img__(.*)jpg/gm
    for (let i = 0; i < this.questionList.length; i++) {
      let content = this.questionList[i]['Question']
      let result = content.match(re);
      if (result != undefined) {
        let raw = result['0'].split(' ');
        console.log(raw);
        for (let i = 0; i < raw.length; i++) {
          console.log(raw[i].slice(5, raw[i].length).replace(/[^a-zA-Z0-9._]*/gm, ''));
          let image = this.dataService.imageLink.find((value, index, obj) => {
            return value.name === raw[i].slice(5, raw[i].length).replace(/[^a-zA-Z0-9._]*/gm, '');
          })
          if (image != undefined) {
            content = content.replace(raw[i], " ![](" + image.link + ") ");
          }
        }

        this.questionList[i]['Question'] = content;
      }
    }
  }

}
