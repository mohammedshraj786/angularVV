import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../component.service';
import { Product } from 'src/app/datatypes/datatype';
import { DomSanitizer , SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-products',
  templateUrl: './get-all-products.component.html',
  styleUrls: ['./get-all-products.component.css']
})
export class GetAllProductsComponent implements OnInit {
  products: Product[] =[];
  isAdmin: boolean = false;

  constructor(private componentService: ComponentService ,  private sanitizer: DomSanitizer , private router: Router) { }

  ngOnInit(): void {

    const isAdminValue = localStorage.getItem('isAdmin');
    console.log(isAdminValue);
    
  this.isAdmin = isAdminValue === 'true'; 

    this.componentService.getAllProducts().subscribe((products: Product[]) => {
      this.products = products;
      console.log(this.products);      
    });
  }

  getImageUrl(imageBase64: string): SafeUrl 
  {
    return this.sanitizer.bypassSecurityTrustUrl(`data:image/png;base64,${imageBase64}`);
  }

  handleBuyNowClick(product: Product): void {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    console.log(isLoggedIn);
    

    const isLoggedInValue = isLoggedIn === null || isLoggedIn === undefined ? 'false' : isLoggedIn;
    console.log(isLoggedInValue);
    

    if (isLoggedInValue === 'false') {
      this.router.navigate(['/login']); 
    } else {
      this.router.navigate(['/home'])
    }
  }

  handleAddToCartClick(product: Product): void {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    console.log(isLoggedIn);
    

    const isLoggedInValue = isLoggedIn === null || isLoggedIn === undefined ? 'false' : isLoggedIn;
    console.log(isLoggedInValue);
    
    if (isLoggedInValue === 'false')
    {
      this.router.navigate(['/login']); 
    } 
    else 
    {
      this.router.navigate(['/home'])
    }
  }

  handleUpdateClick(product: Product): void {
   
  }

  handleDeleteClick(product: Product): void {
   
  }


}







