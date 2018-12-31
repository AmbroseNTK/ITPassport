import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-training',
  templateUrl: './training.page.html',
  styleUrls: ['./training.page.scss'],
})
export class TrainingPage implements OnInit {

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) { }

  majorCatRef: AngularFireList<any>;
  majorCatList: Observable<any>;

  minorCatRef: Array<AngularFireList<any>>;
  minorCatList: Array<Observable<any>>;

  imageLink: Array<any>;

  allowStart = false;
  loadingPercent = 0;
  maxImage = 0;
  currentImage = 0;

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
      snapshot.forEach(value => {
        const ref = this.db.list('titles/' + value.key);
        const val = ref.snapshotChanges().pipe(
          map(changes =>
            changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
          )
        );
        this.minorCatRef.push(ref);
        this.minorCatList.push(val);
      });
    });
    this.loadImageURL();

  }

  loadImageURL() {
    this.imageLink = new Array<any>();
    this.db.list('imgs/').snapshotChanges().subscribe((snapshot) => {
      this.maxImage = snapshot.length;
      let cur = 0;
      snapshot.forEach((value) => {
        this.storage.ref('imgs/' + value.payload.val()).getDownloadURL().subscribe((val) => {
          this.imageLink.push({ name: value.payload.val(), link: val });
          console.log(this.imageLink[cur]);
          cur++;
          this.loadingPercent = cur / this.maxImage;
          this.allowStart = (this.loadingPercent == 1);
        });
      });
    })
  }

}
