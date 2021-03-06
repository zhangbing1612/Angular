import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,Jsonp, Headers } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
 import 'rxjs/Rx';
import { HomePage } from '../home/home';
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

  constructor(public navCtrl: NavController,public navParams: NavParams,public http:Http,public jsonp:Jsonp,private alertCtrl: AlertController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  usn;
  pwd;
  headers = new Headers( {'Content-Type':'application/x-www-form-urlencoded'} );
  Login(){
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
          this.navCtrl.push(HomePage);
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
}
 
