import { Component} from '@angular/core';
import { EmployeeService } from '../comman.service';
@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent {
  formData: any = {
    isAdmin:false
  };

  constructor(private employeeService: EmployeeService) {}

  onSubmit()
  {
    this.employeeService.addEmployee(this.formData).subscribe(
      (response) => {
        console.log('Employee added successfully:', response);
      },
      (error) => {
        console.error('Error adding employee:', error);
      }
    );
    
  }
}

