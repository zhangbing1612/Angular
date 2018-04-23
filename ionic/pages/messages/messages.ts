import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessagePage } from '../message/message';
import { ModalController } from 'ionic-angular';
import $ from 'jquery'
/**
 * Generated class for the MessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {
 
 
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
 
  }
  TOP="置顶"
  items=['za','sd',"sds","sds"]
  top(i){
  if(this.TOP=='置顶'){ 
  this.items.unshift(this.items[i]);
  this.items.splice(i+1,1)
    this.TOP="取消置顶";
    return;
  }else{
  
    this.TOP="置顶"
    return;
  }
 
  
}
del(i){
  this.items.splice(i,1)
}
  // gomsg(i){
  //   var c=this.items[i]
  //   console.log(c)
  //   var l=document.getElementsByTagName("H2")[i];
  //   this.navCtrl.push(MessagePage,{
  //     name:l.childNodes[0].nodeValue
  //   })
  // }
  // gomsg2(){
  //  var a= $('.message-list').index(this)
  //   this.navCtrl.push(MessagePage,{
  //     name:a
  //   })
  // }

// l.childNodes[0].nodeValueo

  // gomsg2(e){
  // var l = $(e.currentTarget).find('h2').text();
  // var a = $(e.currentTarget).find('.time').text();
  // console.log(l)
  // let modal=this.modalCtrl.create(MessagePage,{
  //    name:l,
  //    time:a
  //  })
  //  modal.onDidDismiss(read=>{
  //    this.read=read.readvalue
  //  })
  //  modal.present();
  // }
  read='yyy'
  gomsg2(e){
    var l = $(e.currentTarget).find('h2').text();
    var a = $(e.currentTarget).find('.time').text();
    console.log(l)
    let modal=this.modalCtrl.create(MessagePage,{
       name:l,
       time:a
     })
    localStorage.setItem('read','已读');
    console.log($(e.currentTarget))
    modal.present();
    }

}