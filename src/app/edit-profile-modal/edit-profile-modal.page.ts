import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';

@Component({
  selector: 'app-edit-profile-modal',
  templateUrl: './edit-profile-modal.page.html',
  styleUrls: ['./edit-profile-modal.page.scss'],
})
export class EditProfileModalPage implements OnInit {

  constructor(private navParams: NavParams, private afAuth: AngularFireAuth, private modalController: ModalController) { }

  ngOnInit() {
    this.name = this.afAuth.auth.currentUser.displayName;
    this.phone = this.afAuth.auth.currentUser.phoneNumber;
  }

  name;
  phone;

  saveAndExit() {
    this.afAuth.auth.currentUser.updateProfile({ displayName: this.name, photoURL: '' });
    this.modalController.dismiss();
  }

  sendVerifyCode() {

  }

}
