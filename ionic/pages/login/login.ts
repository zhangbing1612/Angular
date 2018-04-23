import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { Http,Jsonp, Headers } from '@angular/http';
import { AlertController } from 'ionic-angular';
import 'rxjs/Rx';
import { ZhaohuimimaPage } from '../zhaohuimima/zhaohuimima';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public jsonp:Jsonp,private alertCtrl: AlertController) {
  }
  usn;
  pwd;
  headers = new Headers( {'Content-Type':'application/x-www-form-urlencoded'} );
  login(){
    this.http.post('http://datainfo.duapp.com/shopdata/userinfo.php',JSON.stringify({userID:this.usn,password:this.pwd}), {headers:this.headers} )
    .map(data=>{
     data.json();;
    }).subscribe( data=>{
         if(data[0]==0){
           this.presentAlert1();
         }
         if(data[0]==2){
          this.presentAlert2();
        }
        else{
          this.navCtrl.push(TabsPage);
        }
    } );
  }
  presentAlert1() {
    let alert = this.alertCtrl.create({
      title: '用户名错误',
      subTitle: '您的用户名有误请确认后重新输入',
      buttons: ['返回']
    });
    alert.present();
  }
  presentAlert2() {
    let alert = this.alertCtrl.create({
      title: '密码错误',
      subTitle: '您的密码有误请确认后重新输入',
      buttons: ['返回']
    });   
  }

  reg(){
    this.navCtrl.push(RegisterPage);
  }
  gozhao(){
    this.navCtrl.push(ZhaohuimimaPage);
  }
}
