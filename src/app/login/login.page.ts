import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email;
  password;

  constructor(private afAuth: AngularFireAuth, private router: Router, private toastController: ToastController, private db: AngularFireDatabase, private dataService: DataService) { }

  ngOnInit() {

  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  login() {
    this.email = 'kiettuannguyense@gmail.com';
    this.password = '000000';
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then((value) => {
      this.presentToast("Login successfully");
      if (!this.afAuth.auth.currentUser.emailVerified) {
        this.router.navigate(['/verify-email']);
        this.loadConfig();
        this.db.list('users/').set(this.email.toLowerCase().replace('.', '&'), { credits: this.dataService.getConfig('default_point') });
      }
      else {
        this.router.navigate(['/main/account']);
      }
    }).catch((reason) => {
      this.presentToast("Email or Password is invalid");
    });
  }

  signUp() {

  }

  forgotPassword() {
    this.afAuth.auth.sendPasswordResetEmail(this.email);
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
