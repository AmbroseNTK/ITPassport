import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-ad-page',
  templateUrl: './ad-page.page.html',
  styleUrls: ['./ad-page.page.scss'],
})
export class AdPagePage implements OnInit {

  caption = "View this video to get more credits. If it did not show, please wait at the moment";

  constructor(private platform: Platform, private userService: UserService) {
    let adId = 'ca-app-pub-3940256099942544/5224354917';
    let banner = "ca-app-pub-9478315162108738/3608514627";
    if (this.platform.is('android')) {
      adId = 'ca-app-pub-3940256099942544/5224354917';
    } else if (this.platform.is('ios')) {
      adId = 'ca-app-pub-9478315162108738/7134245604';
    }



    // this.admob.rewardVideo.config(config);
    // this.admob.on(this.admob.events.REWARD_VIDEO_REWARD).subscribe(() => { this.giveReward() });
    // if (this.admob.rewardVideo.isReady()) {
    //   this.admob.rewardVideo.prepare().then(() => {

    //     this.admob.rewardVideo.show();

    //   })
    // }

    // this.admob.setOptions({
    //   rewardedAdId: adId,
    //   isTesting: true,
    //   publisherId: banner,
    //   autoShowRewarded: true
    // });

    // this.admob.onRewardedAd().subscribe(() => {
    //   this.giveReward();
    // })

    // this.admob.onAdLoaded().subscribe((ad) => {
    //   this.admob.showRewardedAd();
    // });

    //this.admob.onRewardedAd().subscribe(() => { this.giveReward() });

    // if (this.platform.is('android') || this.platform.is('ios')) {
    //   this.admob.requestRewardedAd();
    // }
    // else {
    //   this.caption = "Your device does not support Advertise";
    // }
  }

  loadAds() {

  }

  /**
   * Nhận thưởng sau khi quảng cáo chạy xong
   */
  giveReward() {
    this.userService.addCredits(50, this.userService.ADD_MORE_CREDITS);
    this.caption = "You have been gotten some credits";
  }

  ngOnInit() {
  }

}
