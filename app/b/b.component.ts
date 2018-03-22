import { Component, OnInit ,Input,EventEmitter, Output} from '@angular/core';
import {GetdataService} from '../services/getdata.service';
@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {
   constructor(public getdata:GetdataService) { }
@Input() todata2=[];
@Output() tolist2 = new EventEmitter<string>();
  ngOnInit() {
    for(var i=0;i<localStorage.length;i++){
      var getkey=localStorage.key(i);
      console.log(localStorage.length)
      if(this.getdata.get(getkey)!=undefined&&getkey.slice(0,2)=='do'){
        this.todata2.push(this.getdata.get(getkey));
      }
    }
    this.doarr=this.todata2;
  }
 doarr=[];
  dell2(i){
    this.doarr.splice(i,1);
  }
  chan3(i){
    this.tolist2.emit(this.doarr[i]);
    this.doarr.splice(i,1);
  }
}
