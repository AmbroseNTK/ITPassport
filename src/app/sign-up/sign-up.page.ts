import { Component, OnInit, Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import IAppState from '../IAppState';
import { Observable } from 'rxjs';
import { User } from '../states/models/user.model';
import * as UserAction from '../states/actions/user.actions';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss']
})
export class SignUpPage implements OnInit {

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    public toastController: ToastController,
    private store: Store<IAppState>) {
    this.user = store.select('user');
  }

  ngOnInit() {
  }

  email;
  password;
  retypePassword;
  checkTerms;

  user: Observable<User>;

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }


  create() {
    this.email = this.email.trim();
    this.store.dispatch(new UserAction.SignIn(
      {
        email: this.email,
        password: this.password,
        retypePassword: this.retypePassword,
        agreeTerm: this.checkTerms
      }));

    this.user.subscribe((payload) => {
      if (!payload.registration.hasError) {
        this.router.navigate(['/verify-email']);
      }
      else {
        this.presentToast(payload.registration.message);
      }
    });
  }

}
