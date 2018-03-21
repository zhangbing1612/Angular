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
    this.doarr=this.todata2;
 // this.doarr=this.getdata.get();
  }
 doarr=[];
  dell2(i){
    this.doarr.splice(i,1);
    this.getdata.remove('todolsit2');
  }
  chan3(i){
    this.tolist2.emit(this.doarr[i]);
    //this.getdata.set(this.doarr)
    this.getdata.remove('todolsit2');
    this.doarr.splice(i,1);
  }
}
