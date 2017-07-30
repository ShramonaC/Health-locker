import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import {AboutPage} from '../about/about';
import {MedPage} from '../med/med';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
	
 aboutPage = AboutPage;
 medPage = MedPage;

  constructor(){

  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
