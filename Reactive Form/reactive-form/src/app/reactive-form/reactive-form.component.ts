import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  contactForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    phoneNo: new FormControl(),
    department: new FormControl()
  });

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm;
      console.log('Form submitted:', formData);
    } else {
      console.log('Please fill in all required fields.');
    }
  }
}
