import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import {AboutPage} from '../about/about';
import {MedPage} from '../med/med';
import {InsuPage} from '../insu/insu';
import {OthersPage} from '../others/others';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
	
 aboutPage = AboutPage;
 medPage = MedPage;
 insuPage = InsuPage;
 othersPage = OthersPage;

  constructor(){

  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
