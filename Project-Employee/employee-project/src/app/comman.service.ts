import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:3000/newEmployees';
  constructor(private http: HttpClient) {}

  addEmployee(data: any) 
  {
    return this.http.post(this.apiUrl, data);
  }
}
