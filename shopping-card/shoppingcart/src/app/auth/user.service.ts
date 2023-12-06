import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommanMember } from '../datatypes/datatype';


@Injectable({
    providedIn:'root'
})

export class UserService
{

    private apiURL = 'http://localhost:3000'
    constructor (private http:HttpClient) {}

    signup(userData : CommanMember):Observable<any>
    {
        return this.http.post(`${this.apiURL}/users` , userData)
    }

    getUsersData(): Observable<CommanMember[]> {
        return this.http.get<any[]>(`${this.apiURL}/users`);
      }

      getUsersDataById(userId: number): Observable<any> {
        return this.http.get<any>(`${this.apiURL}/users/${userId}`);
      }

      updateUserData(userId: number, userData: any): Observable<any> {
        return this.http.put<any>(`${this.apiURL}/users/${userId}`, userData);
      }


}