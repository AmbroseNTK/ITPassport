import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, ActivatedRoute } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';

import { environment } from '../environments/environment';
import { EditProfileModalPageModule } from './edit-profile-modal/edit-profile-modal.module';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { IonicStorageModule } from '@ionic/storage';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { userReducer } from '../app/states/reducers/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './states/effects/user.effects';
import { configReducer } from './states/reducers/config.reducer';
import { ConfigEffects } from './states/effects/config.effect';
import { AdMob } from "@admob-plus/ionic";
import { CategoryEffects } from './states/effects/category.effect';
import { categoryReducer } from './states/reducers/category.reducer';
import { CatInfoModalPageModule } from './cat-info-modal/cat-info-modal.module';
import { historyReducer } from './states/reducers/history.reducer';
import HistoryEffects from './states/effects/history.effect';
import { QuestionEffects } from './states/effects/question.effect';
import { questionReducer } from './states/reducers/question.reducer';
import { syslogReducer } from './states/reducers/syslog.reducer';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot({ hardwareBackButton: false, swipeBackEnabled: false }),
    IonicStorageModule.forRoot({
      name: "__itpassportdb",
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'Firebase'),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    EditProfileModalPageModule,
    CatInfoModalPageModule,

    StoreModule.forRoot({
      user: userReducer,
      config: configReducer,
      category: categoryReducer,
      history: historyReducer,
      question: questionReducer,
      syslog: syslogReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    EffectsModule.forRoot([UserEffects, ConfigEffects, CategoryEffects, HistoryEffects, QuestionEffects]),
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: true,
          sanitize: true,
          smartLists: true,
          smartypants: true,
        },
      },
    })
  ],
  providers: [
    AdMob,
    StatusBar,
    SplashScreen,
    GooglePlus,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: StorageBucket, useValue: 'gs://itpassport-9ccc9.appspot.com/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
