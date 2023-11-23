import { Component } from '@angular/core';
import { AjayService } from './ajay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Taskfive';

  constructor(public ajay:AjayService){
    // console.log(ajay.AddCount());
    // console.log(ajay.value);
    
    
  }

}
