import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'List App';
  listsParent: String[];
  value = true;
  colorvalue = 'red';
  
  constructor(){
    this.listsParent = ['WAP', 'WAA', 'MWA','EA'];
    
  } 
  changeValue(){
       console.log("An element changed its value to " + this.colorvalue);
  }


}
