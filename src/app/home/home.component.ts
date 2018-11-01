import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {

  listCount: number;
  btnValue: string ='Add Item'; 
  goalText: string ='First answer';
  goals= [];

  constructor() { 
    
  }

  ngOnInit() {
    this.listCount=this.goals.length;
  }
  addItem(){
    this.goals.push(this.goalText);
    this.goalText='';
    this.listCount=this.goals.length;
  }
  removeItem(i){
    this.goals.splice(i,1)
    
  }
}
