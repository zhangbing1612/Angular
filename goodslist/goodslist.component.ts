import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 import { Router } from '@angular/router'; 
 import { Http,Jsonp ,Headers} from '@angular/http';
 import { Observable } from "rxjs";
 import {DomSanitizer} from '@angular/platform-browser'

import 'rxjs/Rx';
@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css']
})
export class GoodslistComponent implements OnInit {

  // constructor(public route:ActivatedRoute) { 

  // }
  safeUrl : any; 
 constructor(public router:Router,public route:ActivatedRoute,public http:Http,public jsonp:Jsonp ,private sanitizer: DomSanitizer){

 }
 getSafeUrl(url){
  this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url); 
}

 headers = new Headers( {'Content-Type':'application/x-www-form-urlencoded'} );
  list;
  ngOnInit() {
    // console.log(this.route.snapshot.params)
    // this.route.queryParams.subscribe(params=>{
    //   console.log(params);
    // })

    // this.http.get( 'http://datainfo.duapp.com/shopdata/getclass.php' )
    //    .subscribe( data=>{ 
    //   console.log(JSON.parse(data['_body']));
    //   this.list=JSON.parse(data['_body']);
    //  },err=>{
    //    console.log(err)
    //  } )

    this.jsonp.get( 'http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSONP_CALLBACK' ).subscribe( data=>{ 
      console.log(data['_body']);
      this.list=data['_body'];
     },err=>{
       console.log(err)
     } )

    // this.http.post('http://datainfo.duapp.com/shopdata/getGoods.php',JSON.stringify({}), {headers:this.headers} ).filter(data=>{
    //   return data[status];
    // }).map(data=>{
    //   data.json();
    // }).subscribe( data=>{
    //   console.log(data['_body']);
    //   this.list=JSON.parse(data['_body'])
    // } );


  }
  // list=[1,2,3,4];
 godetail(i){
  this.router.navigate(['/goodslist/gooddetail',i+1]);
 }

}
