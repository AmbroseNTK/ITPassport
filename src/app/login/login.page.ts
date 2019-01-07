import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email;
  password;

  constructor(private afAuth: AngularFireAuth, private router: Router, private toastController: ToastController) { }

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

}
