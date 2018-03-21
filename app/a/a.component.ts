import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
 import {GetdataService} from '../services/getdata.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  constructor(public getdata:GetdataService) { }
  @Input() todata=[];
  @Output() tolist = new EventEmitter<string>();

  ngOnInit(){
  }

   data='';

    keyData(e){
    if(e.keyCode==13){
      this.todata.push(this.data);
      this.getdata.set('todolist',this.todata);
      this.data = '';  
    }
  }
  
  dell(i){
    this.todata.splice(i,1);
    this.getdata.remove('todolsit2');
  }
  fn(dex){
    this.tolist.emit(this.todata[dex]);
    this.todata.splice(dex,1);
    this.getdata.remove('todolsit2');
  }
  
}
