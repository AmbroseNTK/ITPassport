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

import { AdMob } from "@admob-plus/ionic";
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(private afAuth: AngularFireAuth,
    private modalController: ModalController,
    private db: AngularFireDatabase,
    private admob: AdMob,
    private platform: Platform,
    private userService: UserService,
    private categoryService: CategoryService,
    private dataService: DataService, private store: Store<IAppState>) {

    this.user = this.store.select('user');
    this.store.dispatch(new UserAction.GetInfo({ email: this.afAuth.auth.currentUser.email, annonymous: dataService.config['annonymous_mode'] }));
    this.admob.setDevMode(true);
    if (this.platform.is('android') || this.platform.is('ios')) {
      this.loadAds();
      document.addEventListener('admob.reward_video.reward', () => {
        this.giveReward();
      })
    }
  }

  email;
  displayName;
  phone;

  enableAds = false;

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
    this.afAuth.auth.signOut();

  }

  loadAds() {
    this.enableAds = false;
    let adId = 'ca-app-pub-3940256099942544/5224354917';
    if (this.platform.is('android')) {
      adId = 'ca-app-pub-3940256099942544/5224354917';
    } else if (this.platform.is('ios')) {
      adId = 'YOUR_ADID_IOS';
    }
    this.admob.rewardVideo.load({ id: adId, })
      .then(() => {
        this.enableAds = true;
      });

  }
  showAds() {
    this.admob.rewardVideo.show();
  }

  giveReward() {
    this.userService.addCredits(50, this.userService.ADD_MORE_CREDITS);
    this.loadAds();
  }

}
