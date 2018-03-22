import { Injectable } from '@angular/core';
import { stringify } from 'querystring';

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
  set(key,value){
    localStorage.setItem(key,value);
  }
  get(key){
    return localStorage.getItem(key);
  }
  remove(key){
    localStorage.removeItem(key);
  }
};
