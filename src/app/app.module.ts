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

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { userReducer } from '../app/states/reducers/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './states/effects/user.effects';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot({ hardwareBackButton: false, swipeBackEnabled: false }),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'Firebase'),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    EditProfileModalPageModule,
    StoreModule.forRoot({
      user: userReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    EffectsModule.forRoot([UserEffects]),
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
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: StorageBucket, useValue: 'gs://itpassport-9ccc9.appspot.com/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
