import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InsuPage } from './insu';

@NgModule({
  declarations: [
    InsuPage,
  ],
  imports: [
    IonicPageModule.forChild(InsuPage),
  ],
})
export class InsuPageModule {}
