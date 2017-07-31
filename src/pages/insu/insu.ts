import { Component,NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireModule} from 'angularfire2';
import {FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

/**
 * Generated class for the InsuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-insu',
  templateUrl: 'insu.html',
})
export class InsuPage {

  storageRef = firebase.storage().ref();
	image:any;
	file:any;

  constructor(public navCtrl: NavController, public af: AngularFireModule,public zone:NgZone) {
		this.storageRef.child("insurance/CV.jpg").getDownloadURL().then((url)=> {
		this.zone.run(()=> {
			 console.log(url);
		//this.image =url;

		});
		});
  }

	selectFile(e){
		 this.file= e.target.files[0];
		 this.readPhoto(this.file);
	}

	startUpload(){
		this.storageRef.child("insurance/"+this.file.name).put(this.file).then((snapshot)=> {
		alert("Upload"+ this.file.name+ " Successfull");
		});
	}
	
	readPhoto(file){
		let reader = new FileReader();
		reader.onload =(e) =>{
			this.zone.run(()=>{
			let path:any = e.target;
			this.image = path.result;
		});
		}
		
		reader.readAsDataURL(file);
	}


}
