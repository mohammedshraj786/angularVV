import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent  {
  age: string | undefined;
  selectedImage: File | null = null;

  onSubmit(myData: any) {
    if (myData.valid) {
      console.log(myData, "Success");
    } else {
      console.log("Failed");
    }
  }

  calculateAge(dob: string): void {
    if (dob) {
      const today = new Date();
      const birthDate = new Date(dob);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      this.age = age.toString(); 
    }
  }
  
}
