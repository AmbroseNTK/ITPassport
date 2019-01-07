import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController } from '@ionic/angular';
import { EditProfileModalPage } from '../edit-profile-modal/edit-profile-modal.page';
import { AngularFireDatabase } from '@angular/fire/database';
import { DataService } from '../data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(private afAuth: AngularFireAuth, private modalController: ModalController, private db: AngularFireDatabase, private dataService: DataService) { }

  email;
  displayName;
  phone;

  ngOnInit() {
    this.email = this.afAuth.auth.currentUser.email;
    this.displayName = this.afAuth.auth.currentUser.displayName;
    this.phone = this.afAuth.auth.currentUser.phoneNumber;
    this.loadConfig();
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

  loadConfig() {
    this.db.list('config/').snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, value: c.payload.val() }))
      )
    ).subscribe((snapshot) => {
      console.log(snapshot);
      this.dataService.config = snapshot;

    });
  }

}
