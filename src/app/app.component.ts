import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uin';
  sideBar:boolean=true;

  openNav(){
    this.sideBar = !this.sideBar
    if(this.sideBar){
      document.getElementById("mySidebar").style.width = "150px";
      document.getElementById("main").style.marginLeft = "150px";
    } else{
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
    }
    
  }
}
