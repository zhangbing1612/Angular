import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css']
})
export class GoodslistComponent implements OnInit {

  constructor() { 

  }
  @Input() list:Array<any>;
  ngOnInit() {
    
  }
}
