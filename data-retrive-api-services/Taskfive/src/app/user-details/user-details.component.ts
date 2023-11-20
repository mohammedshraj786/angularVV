import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
@Input() selectedUser:any;
@Output() goBackEvent = new EventEmitter<void>();

goBack(): void {
  this.goBackEvent.emit();
}

}
