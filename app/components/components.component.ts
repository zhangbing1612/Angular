import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';
import {GetdataService} from '../services/getdata.service';


@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  constructor(public getdata:GetdataService) { }
  @Input() arrData:Array <any>;
 @Output() getindex=new EventEmitter();
 ngOnChanges(){
 }
 num:number;
  ngOnInit() {
  // this.getdata.addData(300);
  // this.getdata.addData(500);
  //  console.log(this.getdata.list);
  }
  ngOnCheck(){
    console.log(2)
  }
  ngondestroy(){
    console.log(3)
  }
fn(i){
  this.getindex.emit(i);
}
}
