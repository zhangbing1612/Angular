import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { SetPage } from '../set/set';
import { CoopratePage } from '../cooprate/cooprate';
/**
 * Generated class for the MinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html',
})
export class MinePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MinePage');
  }
  goSet(){
    let modal1=this.modalCtrl.create(SetPage)
    modal1.present();
  }
  goCooperate(){
    let modal2=this.modalCtrl.create(CoopratePage)
    modal2.present();
  }
}
