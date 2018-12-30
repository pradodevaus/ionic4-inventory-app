import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';

import { PopoverMenuComponent } from './components/popover-menu/popover-menu.component';

const routes: Routes = [];

@NgModule({
  declarations: [PopoverMenuComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    PopoverMenuComponent
  ],
  entryComponents: [PopoverMenuComponent]
})
export class SharedModule { }
