import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedColor: string='';
  hoverColor: boolean = false;

  selectColor(color: string) {
    this.selectedColor = color;
  }

  toggleHighlight() {
    this.hoverColor = !this.hoverColor;
  }
}








