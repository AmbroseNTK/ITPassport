import { Component, OnInit, Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss']
})
export class SignUpPage implements OnInit {

  constructor(public afAuth: AngularFireAuth, public router: Router, public toastController: ToastController) { }

  ngOnInit() {
  }

  email;
  password;
  retypePassword;
  checkTerms;
  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }


  create() {
    if (this.password === this.retypePassword && this.password.length >= 6) {
      if (this.checkTerms) {
        this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password).then((value) => {
          this.router.navigate(['/verify-email']);
        }).catch((reason) => {
          this.presentToast('Cannot create new account');
        });
      }
      this.presentToast('Please check terms and conditions')
    }
    this.presentToast('Incorrect password');
  }

}
