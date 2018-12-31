import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage implements OnInit {

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.reSend();
  }

  reSend() {
    this.afAuth.auth.currentUser.sendEmailVerification();
  }

}
