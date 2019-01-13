import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { User } from '../states/models/user.model';
import { Store } from '@ngrx/store';
import * as UserAction from '../states/actions/user.actions';
import IAppState from '../IAppState';



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
    private store: Store<IAppState>) {
    this.user = store.select('user');
    this.dataService.fetchConfig();
  }

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
    this.email = 'nguyentuankiet23031998@gmail.com';
    this.password = '000000';
    this.store.dispatch(new UserAction.Login({ email: this.email, password: this.password }));
    this.user.subscribe((value) => {
      if (!value.error) {
        this.router.navigate(['/main/account']);
      }
      else {
        this.presentToast('Email or password is invalid');
      }
    })
  }

  forgotPassword() {
    this.store.dispatch(new UserAction.ForgotPassword({ email: this.email }));
  }

}
