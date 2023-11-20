import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  firstName = 'Mohammed Shraj';
  lastName = 'Bathruteen';
  @Input() childValueFromParent: string = '';
  @Output() sendToParent = new EventEmitter<string>();

  childValue: string = '';

  sendToParentComponent(value: string): void {
    this.sendToParent.emit(value);
  }
}

