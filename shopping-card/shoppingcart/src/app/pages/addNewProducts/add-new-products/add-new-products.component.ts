import { Component } from '@angular/core';
import { AdminService } from '../../admin.service';
import { ToastrService } from 'ngx-toastr';
import { Router} from '@angular/router';

@Component({
  selector: 'app-add-new-products',
  templateUrl: './add-new-products.component.html',
  styleUrls: ['./add-new-products.component.css']
})
export class AddNewProductsComponent {
  selectedImage: string | ArrayBuffer | null = null;
  productName: string = '';
  productDescription: string = '';
  productPrice: number = 0;
  categories: string = '';
  imageBase64: string = '';

  constructor(private adminService: AdminService , private router:Router , private toastr: ToastrService) { }

  onFileChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result as string;
        this.imageBase64 = reader.result?.toString().split(',')[1] || '';
        console.log('Image URL:', this.imageBase64);
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(productForm: any): void {
    if (productForm.valid) {
      const formData = {
        productName: this.productName,
        productDescription: this.productDescription,
        productPrice: this.productPrice,
        categories: this.categories,
        imageBase64: this.imageBase64 
      };

      this.adminService.addProduct(formData)
        .subscribe(
          (response) => {
            console.log('Product added successfully:', response);
            this.showAddedSuccess();
            setTimeout(()=>{
              this.router.navigate(['/home/allproduct'])
  
            },500)
          },
          (error) => {
            console.error('Error while adding product:', error);
          }
          
        );
    }
  }

  showAddedSuccess():void{
    this.toastr.success('Product Added SuccessFully' , 'Product' , {
      timeOut:3000,
    })
  }
}
