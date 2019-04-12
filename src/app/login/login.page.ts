import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { User } from '../states/models/user.model';
import { Store } from '@ngrx/store';
import * as UserAction from '../states/actions/user.actions';
import IAppState from '../IAppState';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email;
  password;

  user: Observable<User>

  constructor(
    private router: Router,
    private toastController: ToastController,
    private dataService: DataService,
    private storage: Storage,
    private store: Store<IAppState>) {

    this.user = store.select('user');
    this.dataService.fetchConfig();
    this.storage.get("auto_login").then((value) => {
      if (value) {
        this.storage.get("login_email").then((email) => {
          this.storage.get("login_password").then((password) => {
            this.email = email;
            this.password = password;
            this.login();
          })
        })
      }
    })
  }

  ngOnInit() {

  }

  isObsoleted() {
    return this.dataService.config['is_obsolete'];
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  login() {
    //this.email = 'kiettuannguyense@gmail.com';
    //this.password = '23031998';
    if (!this.isObsoleted()) {
      this.store.dispatch(new UserAction.Login({ email: this.email, password: this.password }));
      this.user.subscribe((value) => {
        if (value.error != undefined) {
          console.log(value);
          if (!value.error) {
            this.storage.set("login_email", this.email);
            this.storage.set("login_password", this.password);
            this.router.navigate(['/main/account']);
          }
          else {

            this.presentToast('Email or password is invalid');

          }
        }
      })
    }
  }

  forgotPassword() {
    this.store.dispatch(new UserAction.ForgotPassword({ email: this.email }));
  }

  setAutoLogin(event) {
    console.log(event['detail']['checked']);
    this.storage.set("auto_login", event['detail']['checked']);
  }

}
