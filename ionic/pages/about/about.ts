import { Component } from '@angular/core';
import { NavController ,ViewController} from 'ionic-angular';
import { ModalController } from 'ionic-angular';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,public modalCtrl: ModalController,public viewCtrl:ViewController) {

  }
  gobackLOOK(){
    this.viewCtrl.dismiss()
  }
}
