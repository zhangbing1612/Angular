import { Component, OnInit ,Input,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {
   constructor() { }
@Input() todata2=[];
@Output() tolist2 = new EventEmitter<string>();
  ngOnInit() {
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
