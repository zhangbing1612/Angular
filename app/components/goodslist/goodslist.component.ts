import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { Router } from '@angular/router'; 
@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css']
})
export class GoodslistComponent implements OnInit {

  // constructor(public route:ActivatedRoute) { 

  // }
 constructor(public router:Router){

 }
  num
  ngOnInit() {
    // console.log(this.route.snapshot.params)
  }
 list=[1,2,3,4];
 godetail(i){
  this.router.navigate(['/gooddetail',i]);
 }

}
