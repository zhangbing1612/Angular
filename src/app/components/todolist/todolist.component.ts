import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  tolist = [];
  comlist = [];
  content = '';
  addData(){
    this.tolist.push(this.content);
    this.content = '';
  }
  keyData(e){
    if(e.keyCode==13){
      this.tolist.push(this.content);
      this.content = '';
    }
  }
  delData(i){
  	this.tolist.splice(i,1);
  }
  change(i){
    this.comlist.push(this.tolist[i])
    this.tolist.splice(i,1);
  }
  delData2(i){
  	this.comlist.splice(i,1);
  }
  change2(i){
    this.tolist.push(this.comlist[i])
    this.comlist.splice(i,1);
  }
}
