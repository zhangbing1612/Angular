import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { ToastController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ZhaohuimimaPage } from '../zhaohuimima/zhaohuimima';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private toastCtrl: ToastController,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
go(){
  this.viewCtrl.dismiss(HomePage)
}
goo(){
  let toast = this.toastCtrl.create({
    message: '注册成功',
    duration: 1000,
    position: 'middle',
    cssClass:'bottomToast',
  });
  toast.present(toast);
  this.viewCtrl.dismiss(HomePage)
}

}
