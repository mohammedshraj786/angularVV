import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class AdminService{

    private apiURL = 'http://localhost:3000';
    constructor(private http:HttpClient) {}

    addProduct(productData: any):Observable<any>
    {
        return this.http.post<any>(`${this.apiURL}/products`,productData);
    }
    
}