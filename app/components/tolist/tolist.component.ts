import { Component, OnInit ,Output,Input, EventEmitter} from '@angular/core';
import { GetdataService } from '../../services/service.service';

@Component({
  selector: 'app-tolist',
  templateUrl: './tolist.component.html',
  styleUrls: ['./tolist.component.css']
})
export class TolistComponent implements OnInit {

  constructor(public getdata:GetdataService) { }
  @Input() todata=[];
  @Output() tolist = new EventEmitter<string>();
  @Output() dolist = new EventEmitter<string>();
  ngOnInit() {
    document.getElementById('inp').focus();
    this.todata.length=0;
  }

  data="";
  toarr=this.todata;
  add(){
    if(this.data !== ""){
      this.toarr.push(this.data);
      this.data='';
    }else{
      // this.data='老铁，不能空着！'
      document.getElementById('inp').setAttribute('placeholder','老铁，不能空着!');
    }
    document.getElementById('inp').focus();
  }
  reset(){
    this.toarr.length = 0;
  }
  change(i){
    this.tolist.emit(this.toarr[i]);
    this.toarr.splice(i,1);
  }
  del(i){
    this.toarr.splice(i,1);
  }
}
