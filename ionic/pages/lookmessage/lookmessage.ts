import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage} from '../about/about';
import { ModalController } from 'ionic-angular';
/**
 * Generated class for the LookmessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lookmessage',
  templateUrl: 'lookmessage.html',
})
export class LookmessagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LookmessagePage');
  }
  goabout(){
    this.modalCtrl.create(AboutPage).present();
  }
}
