import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule} from 'angularfire2';
import * as firebase from 'firebase';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import {MedPage} from '../pages/med/med';

export const config = {
	apiKey: "AIzaSyCJJKmo8jIS0UYE1UEfTJjiCepQeGId6Qg",
    authDomain: "ionic2-storage-e04a8.firebaseapp.com",
    databaseURL: "https://ionic2-storage-e04a8.firebaseio.com",
    projectId: "ionic2-storage-e04a8",
    storageBucket: "ionic2-storage-e04a8.appspot.com",
    messagingSenderId: "167314487064"
};
 firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();
  
  function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    MedPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
	AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    MedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
