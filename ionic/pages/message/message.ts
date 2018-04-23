import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';
import { ModalController } from 'ionic-angular';
/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {
  myname:string;
  time;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public viewCtrl:ViewController) {
    this.myname=navParams.get('name');
    this.time=navParams.get('time')
  }

  goback(){
    this.viewCtrl.dismiss({readvalue:'已读'})
  }

}
