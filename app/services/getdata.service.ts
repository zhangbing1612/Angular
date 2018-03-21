import { Injectable } from '@angular/core';

@Injectable()
export class GetdataService {

  constructor() { }
  // list=[];
  // index:number;
  // getindex(i){
  //   this.index=i;
  // }
  // get(url:number){

  //   return url+100;
  // }
  // addData(num:number){
  //     this.list.push(num);
  // }
  
  set(a,value){
    // var a=value;
    localStorage.setItem(a,JSON.stringify(a))
  
  }
  get(a){
    var collection=localStorage.getItem("a");
	if(collection!=null){
    return JSON.parse(collection);
  }
  else return [];
  }
  remove(a){
    localStorage.removeItem(a);
  }
}
  

