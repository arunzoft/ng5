import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
// import { ActivatedRoute } from '@Angular/router'

 
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private router:Router){
    
  }
  
  ngOnInit() {
  }
  
  
  takemeHome(){
    this.router.navigate(['']);
  }
 

}
