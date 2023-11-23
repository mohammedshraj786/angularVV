import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing'; 

  constructor(private router:Router){
setTimeout(() => {
  // router.navigate(['about'])student
  router.navigateByUrl('/student/student1')
}, 3000);
  }
}
