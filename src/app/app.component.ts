import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';


const config = {
  apiKey: 'AIzaSyChjgZ6sxyZ6H5XYW6zUA4SD1MHZsREK4s',
  authDomain: 'ionicchat-4884d.firebaseapp.com',
  databaseURL: 'ionicchat-4884d',
  projectId: 'ionicchat-4884d.appspot.com',
  storageBucket: 'ionicchat-4884d.appspot.com',
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
