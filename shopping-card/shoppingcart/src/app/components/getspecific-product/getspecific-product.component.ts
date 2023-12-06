import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentService } from '../component.service';
import { Product } from 'src/app/datatypes/datatype';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-getspecific-product',
  templateUrl: './getspecific-product.component.html',
  styleUrls: ['./getspecific-product.component.css']
})
export class GetspecificProductComponent implements OnInit {
  category: string = '';
  filteredProducts: Product[] = [];

  constructor(private route: ActivatedRoute, private componentService: ComponentService ,  private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('category')!;
    console.log('Category:', this.category); 
  
    if (this.category) {
      this.fetchProducts();
    }
  }

  fetchProducts(): void 
  {
    if (this.category) {
      this.componentService.getProductsByCategory(this.category).subscribe(products => {
        this.filteredProducts = products;
      });
    } else {
      this.componentService.getAllProducts().subscribe(products => {
        this.filteredProducts = products;
      });
    }
  }

  getImageUrl(imageBase64: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(`data:image/gif;base64,${imageBase64}`);
  }

}
