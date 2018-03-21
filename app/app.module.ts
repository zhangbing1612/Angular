import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { ActivatedRoute } from '@angular/router';

import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { GoodslistComponent } from './components/goodslist/goodslist.component';
import { VoterComponent } from './components/voter/voter.component';
import { ComponentsComponent } from './components/components.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import {GetdataService} from './services/getdata.service';
import { HomeComponent } from './components/home/home.component';
import { NopageComponent } from './components/nopage/nopage.component';
import { GooddetailComponent } from './components/gooddetail/gooddetail.component';



@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    GoodslistComponent,
    VoterComponent,
    ComponentsComponent,
    AComponent,
    BComponent,
    HomeComponent,
    NopageComponent,
    GooddetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'todolist/:td',component:TodolistComponent},
      {path:'goodslist',component:GoodslistComponent},
      {path:'home',component:HomeComponent},
      {path:'gooddetail/:id',component:GooddetailComponent},
      {path:'',redirectTo:'homh',pathMatch:'full'},
      {path:'**',component:NopageComponent}
    ])
  ],
  providers: [GetdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
