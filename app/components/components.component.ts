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
   console.log(0);
 }
 num:number;
  ngOnInit() {
 
  }
  ngOnCheck(){
  
  }
  ngondestroy(){

  }
fn(i){
  this.getindex.emit(i);
  // this.getdata.getindex(i);
}
}
