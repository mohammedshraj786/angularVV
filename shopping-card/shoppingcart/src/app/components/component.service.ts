import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "../datatypes/datatype";

@Injectable({
    providedIn:'root'
})
export class ComponentService {
    private apiURL = 'http://localhost:3000/products';

    constructor(private http: HttpClient) {}

    getAllProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.apiURL);
    }
    
    getProductsByCategory(category: string): Observable<Product[]> {
        const url = `${this.apiURL}?categories=${category}`;
        return this.http.get<Product[]>(url);
    }
}
