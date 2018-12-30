import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverMenuComponent } from '../../shared/components/popover-menu/popover-menu.component';
import { NavMenuItem } from '../../models/NavMenuItem';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
    const abc: NavMenuItem =  {
      title: 'Home',
      url: '/home',
      icon: 'home',
      color: 'default',
      isActive: true,
      children: null
    };
    console.log(abc);
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
