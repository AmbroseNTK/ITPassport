import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Admob } from '@ionic-native/admob/ngx';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-ad-page',
  templateUrl: './ad-page.page.html',
  styleUrls: ['./ad-page.page.scss'],
})
export class AdPagePage implements OnInit {

  caption = "View this video to get more credits. If it did not show, please wait at the moment";

  constructor(private admob: Admob, private platform: Platform, private userService: UserService) {
    let adId = 'ca-app-pub-3940256099942544/5224354917';
    if (this.platform.is('android')) {
      adId = 'ca-app-pub-3940256099942544/5224354917';
    } else if (this.platform.is('ios')) {
      adId = 'YOUR_ADID_IOS';
    }

    this.admob.setOptions({
      rewardedAdId: adId,
      isTesting: true,
      publisherId: '',
      autoShowRewarded: false
    });


    this.admob.onAdLoaded().subscribe((ad) => {
      console.log("Ad loaded...");
    })

    //this.admob.onRewardedAd().subscribe(() => { this.giveReward() });

    if (this.platform.is('android') || this.platform.is('ios')) {
      this.loadAds();
    }
    else {
      this.caption = "Your device does not support Advertise";
    }
  }

  loadAds() {
    this.admob.requestRewardedAd().then(() => {
      this.showAds();
    });
  }

  showAds() {
    this.admob.onRewardedAd().subscribe((value) => {
      this.giveReward();
    })
    this.admob.showRewardedAd().then(() => {

    });

  }

  giveReward() {
    this.userService.addCredits(50, this.userService.ADD_MORE_CREDITS);
    this.caption = "You have been gotten some credits";
  }

  ngOnInit() {
  }

}
