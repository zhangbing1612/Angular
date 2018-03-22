import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { GoodslistComponent } from './components/goodslist/goodslist.component';
import { VoterComponent } from './components/voter/voter.component';
import { ComponentsComponent } from './components/components.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import {GetdataService} from './services/getdata.service';



@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    GoodslistComponent,
    VoterComponent,
    ComponentsComponent,
    AComponent,
    BComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [GetdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
