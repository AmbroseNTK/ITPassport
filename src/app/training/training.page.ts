import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable, ObjectUnsubscribedError } from 'rxjs';
import { map } from 'rxjs/operators'
import { AngularFireStorage } from '@angular/fire/storage';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CategoryService } from '../services/category.service';
import { CatInfoModalPage } from '../cat-info-modal/cat-info-modal.page';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.page.html',
  styleUrls: ['./training.page.scss'],
})
export class TrainingPage implements OnInit {

  constructor(private db: AngularFireDatabase,
    private storage: AngularFireStorage,
    private router: Router,
    private modalController: ModalController,
    private dataService: DataService,
    //private questionService: QuestionService,
    private categoryService: CategoryService
  ) { }

  majorCatRef: AngularFireList<any>;
  majorCatList: Observable<any>;

  minorCatRef: Array<AngularFireList<any>>;
  minorCatList: Array<Observable<any>>;

  questionList: Observable<any>;
  questions: any;
  selectedQuestion: Array<any>;

  imageLink: Array<any>;

  allowStart = false;
  loadingPercent = 0;
  maxImage = 0;
  currentImage = 0;

  catTree: Array<Array<boolean>>;

  async ngOnInit() {
    this.majorCatRef = this.db.list('titles');
    this.majorCatList = this.majorCatRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

    this.majorCatList.subscribe(snapshot => {
      this.minorCatRef = new Array<AngularFireList<any>>();
      this.minorCatList = new Array<Observable<any>>();
      this.catTree = new Array<Array<boolean>>();
      snapshot.forEach(value => {
        const ref = this.db.list('titles/' + value.key);
        const val = ref.snapshotChanges().pipe(
          map(changes =>
            changes.map(c => ({ ...c.payload.val() }))
          )
        );
        this.minorCatRef.push(ref);
        this.minorCatList.push(val);

        let newArr = new Array<boolean>();
        for (let i = 0; i < 10; i++) {
          newArr.push(false);
        }
        this.catTree.push(newArr);

      });
    });

    this.selectedQuestion = new Array<any>();
    this.loadImageURL();
    this.loadQuestion();

  }

  loadImageURL() {
    this.imageLink = new Array<any>();
    this.db.list('imgs/').snapshotChanges().subscribe((snapshot) => {
      this.maxImage = snapshot.length;
      let cur = 0;
      snapshot.forEach((value) => {
        this.storage.ref('ip_imgs/' + value.payload.val()).getDownloadURL().subscribe((val) => {
          this.imageLink.push({ name: value.payload.val(), link: val });
          cur++;
          this.loadingPercent = cur / this.maxImage;
          this.dataService.imageLink = this.imageLink;
        });
      });
    })
  }

  loadQuestion() {
    this.questionList = this.db.list('questions/').snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

    this.questionList.subscribe((value) => {
      this.questions = value;
      console.log(this.questions);
    })


  }

  onSelected() {
    this.dataService.catMatrix = this.catTree;
    this.selectedQuestion.splice(0, this.selectedQuestion.length);
    for (let i = 0; i < this.catTree.length; i++) {
      for (let j = 0; j < this.catTree[i].length; j++) {
        if (this.catTree[i][j]) {
          let selected = this.getQuestionForAP(i, j);
          for (let k = 0; k < selected.length; k++) {
            this.selectedQuestion.push(selected[k]);
          }
          console.log(selected);
        }
      }
    }
    this.allowStart = this.selectedQuestion.length > 10 && this.loadingPercent == 1;
    this.dataService.selectedQuestions = this.selectedQuestion;
  }

  getQuestionForFE(major, minor) {
    let questList = new Array<any>();
    let majorKeys = Object.keys(this.questions);
    let minorKeys = Object.keys(this.questions[majorKeys[major]]);
    let subKey = Object.keys(this.questions[majorKeys[major]][minorKeys[minor]]);
    console.log(majorKeys);
    console.log(minorKeys);
    console.log(subKey);
    if (subKey != undefined) {
      for (let i = 0; i < subKey.length; i++) {
        let listSub = this.questions[majorKeys[major]][minorKeys[minor]][subKey[i]];
        for (let j = 0; j < listSub.length; j++) {
          questList.push(listSub[j]);
        }
      }
    }
    return questList;
  }

  getQuestionForAP(major, minor) {
    let questList = new Array<any>();
    let majorKeys = Object.keys(this.questions);
    let minorKeys = Object.keys(this.questions[majorKeys[major]]);
    let subKey = Object.keys(this.questions[major][minorKeys[minor]]);

    if (subKey != undefined) {
      for (let i = 0; i < subKey.length; i++) {
        {
          questList.push(this.questions[major][minorKeys[minor]][subKey[i]]);
        }
      }
    }
    return questList;
  }


  prepareStart() {
    this.dataService.navState['canEnterBeforeStart'] = true;
    this.router.navigate(['/before-start']);
  }

  async openInfo(i) {
    console.log((i + 1).toString());
    this.categoryService.selectCategory((i + 1).toString());
    const modal = await this.modalController.create({ component: CatInfoModalPage });
    return await modal.present();
  }

}
