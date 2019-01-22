import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-cat-info-modal',
  templateUrl: './cat-info-modal.page.html',
  styleUrls: ['./cat-info-modal.page.scss'],
})
export class CatInfoModalPage implements OnInit {

  catName;
  catDescription
  subCatList: Array<{}>;

  category;

  constructor(private categoryService: CategoryService) {
    this.category = categoryService.getSelectedCategory();
    this.subCatList = new Array<{}>();
    this.catName = this.category['title'];
    this.catDescription = this.category['description'];
    let keys = Object.keys(this.category);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      if (key != 'title' && key != 'description') {
        this.subCatList.push(this.category[key]['title']);
      }
    }
    console.log(this.subCatList);
  }

  ngOnInit() {
  }

  close() {

  }

}
