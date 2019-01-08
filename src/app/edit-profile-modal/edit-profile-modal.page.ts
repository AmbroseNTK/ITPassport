import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import IAppState from '../IAppState';
import { Observable } from 'rxjs';
import { User } from '../states/models/user.model';
import * as UserAction from '../states/actions/user.actions';

@Component({
  selector: 'app-edit-profile-modal',
  templateUrl: './edit-profile-modal.page.html',
  styleUrls: ['./edit-profile-modal.page.scss'],
})
export class EditProfileModalPage implements OnInit {

  constructor(private navParams: NavParams,
    private afAuth: AngularFireAuth,
    private modalController: ModalController,
    private store: Store<IAppState>) {
    this.user = this.store.select('user');
  }

  ngOnInit() {
    this.user.subscribe((payload) => {
      this.name = payload.currentUser.displayName;
      this.phone = payload.currentUser.phoneNumber;
    })
  }

  name;
  phone;
  user: Observable<User>;

  saveAndExit() {
    this.store.dispatch(new UserAction.EditInfo({ newName: this.name, newPhone: this.phone }));
    this.modalController.dismiss();
  }

  sendVerifyCode() {

  }

}
