import { Injectable } from '@angular/core';

@Injectable()
export class GetdataService {

  constructor() { }
  list=[];
  index:number;
  getindex(i){
    this.index=i;
  }
  get(url:number){

    return url+100;
  }
  addData(num:number){
      this.list.push(num);
  }
};
