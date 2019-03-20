import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController, Platform } from '@ionic/angular';
import { EditProfileModalPage } from '../edit-profile-modal/edit-profile-modal.page';
import { AngularFireDatabase } from '@angular/fire/database';
import { DataService } from '../data.service';
import { Store } from '@ngrx/store';
import IAppState from '../IAppState';
import { Observable } from 'rxjs';
import { User } from '../states/models/user.model';
import * as UserAction from '../states/actions/user.actions';
import { UserService } from '../services/user.service';

import { CategoryService } from '../services/category.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {



  constructor(private afAuth: AngularFireAuth,
    private modalController: ModalController,
    private db: AngularFireDatabase,
    private platform: Platform,
    private userService: UserService,
    private router: Router,
    private storage: Storage,
    private dataService: DataService, private store: Store<IAppState>) {

    this.user = this.store.select('user');
    this.store.dispatch(new UserAction.GetInfo({ email: this.afAuth.auth.currentUser.email, annonymous: dataService.config['annonymous_mode'] }));
  }



  email;
  displayName;
  phone;



  user: Observable<User>;

  ngOnInit() {
  }

  async openEditProfile() {
    console.log("Open modal");
    const modal = await this.modalController.create({ component: EditProfileModalPage });
    return await modal.present();
  }

  signOut() {
    console.log("sign out");
    this.storage.set("auto_login", false);
    this.storage.set("login_email", "");
    this.storage.set("login_password", "");
    this.afAuth.auth.signOut();

  }

  showAds() {
    this.router.navigate(["ad-page/"]);
  }


}
