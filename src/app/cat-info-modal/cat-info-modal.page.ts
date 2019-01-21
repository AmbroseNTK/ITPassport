import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-info-modal',
  templateUrl: './cat-info-modal.page.html',
  styleUrls: ['./cat-info-modal.page.scss'],
})
export class CatInfoModalPage implements OnInit {

  catName;
  catDescription;
  subCatList;

  constructor() { }

  ngOnInit() {
  }

  close() {

  }

}
