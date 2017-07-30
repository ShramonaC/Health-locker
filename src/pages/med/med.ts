import { Component,NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireModule} from 'angularfire2';
import {FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

@Component({
  selector: 'page-med',
  templateUrl: 'med.html',
})
export class MedPage {

	storageRef = firebase.storage().ref();
	image:any;
	file:any;

  constructor(public navCtrl: NavController, public af: AngularFireModule,public zone:NgZone) {
		this.storageRef.child("med/CV.jpg").getDownloadURL().then((url)=> {
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
		this.storageRef.child("med/"+this.file.name).put(this.file).then((snapshot)=> {
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
