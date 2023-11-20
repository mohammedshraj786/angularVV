import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TaskOne';
  parentValue = '';

  receiveChildData(childData: string): void {
    this.parentValue = childData;
  }
}
