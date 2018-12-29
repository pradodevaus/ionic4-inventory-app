import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavMenuItem } from './models/NavMenuItem';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  menus: NavMenuItem[] = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home',
      color: 'default',
      isActive: true,
      children: null
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings',
      color: 'default',
      isActive: true,
      children: null
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    console.log(this.menus);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


}
