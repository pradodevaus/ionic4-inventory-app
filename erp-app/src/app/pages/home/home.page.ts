import { Component, OnInit, OnDestroy } from '@angular/core';
import { PopoverController, Platform } from '@ionic/angular';
import { PopoverMenuComponent } from '../../shared/components/popover-menu/popover-menu.component';
import { NavMenuItem } from '../../models/NavMenuItem';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];

  constructor(public popoverController: PopoverController, private platform: Platform) {
    console.log('Home ctor()');

    this.subscriptions.push(this.platform.backButton.subscribe(() => {
      console.log('Back button');
      alert('Back button');
    }));
  }

  ngOnInit() {
    console.log('Home ngOnInit()');

    const abc: NavMenuItem = {
      title: 'Home',
      url: '/home',
      icon: 'home',
      color: 'default',
      isActive: true,
      children: null
    };
    console.log(abc);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((elem) => { elem.unsubscribe(); });
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverMenuComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
