import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import {ViewChild } from '@angular/core';
import { List } from 'ionic-angular';
import {LoginPage} from '../login/login';
import { Slides } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Platform, ToastController, App, Tabs } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { RegisterPage } from '../register/register';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items=[];
  @ViewChild(Slides) slides: Slides;
  constructor( private statusBar: StatusBar,public platform: Platform,
    private camera: Camera,
    public appCtrl: App,
    public toastCtrl: ToastController,public modalCtrl:ModalController,public navCtrl: NavController) {
    this.statusBar.overlaysWebView(true);
    this.statusBar.backgroundColorByHexString('#fedb47')
    this.platform.ready().then(() => {
      this.registerBackButtonAction(null);
      statusBar.styleDefault();
     // SplashScreen.hiden();      
    });
  }
   //控制硬件返回按钮是否触发，默认false
   backButtonPressed: boolean = false;
  //注册方法
  registerBackButtonAction(tabRef: Tabs): void {
    
    //registerBackButtonAction是系统自带的方法
    this.platform.registerBackButtonAction(() => {
      //获取NavController
      let activeNav: NavController = this.appCtrl.getActiveNavs()[0];
      //如果可以返回上一页，则执行pop
      if (activeNav.canGoBack()) {
        activeNav.pop();
      } else {
        if (tabRef == null) {
          //执行退出
          this.showExit();
        } else {
          //选择首页第一个的标签
          tabRef.select(0);
        }
      }
    });
  }
  //退出应用方法
  showExit() {
    //如果为true，退出
    if (this.backButtonPressed) {
      this.platform.exitApp();
    } else {
        //第一次按，弹出Toast
        this.toastCtrl.create({
            message: '再按一次退出应用',
            duration: 2000,
            position: 'middle'
        }).present();
      //标记为true
      this.backButtonPressed = true;
      //两秒后标记为false，如果退出的话，就不会执行了
      setTimeout(() => this.backButtonPressed = false, 2000);
    }
  }

  //相机
  imgsrc:string;
  takePhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    this.imgsrc=base64Image;
    }, (err) => {
     // Handle error
    });
  }
search='xinxi';

i:string;
doInfinite(infiniteScroll) {
  console.log('Begin async operation')
  let toast = this.toastCtrl.create({
    message: '正在加载',
    duration: 1000,
    position: 'middle',
    cssClass:'bottomToast',
  });
  toast.present(toast);
  setTimeout(() => {
    for (let i = 0; i < 30; i++) {
      this.items.push( this.items.length);
    }

    console.log('Async operation has ended');
    infiniteScroll.complete();
  }, 1000);
}
goreg(){
  this.navCtrl.push(RegisterPage)
}
}
