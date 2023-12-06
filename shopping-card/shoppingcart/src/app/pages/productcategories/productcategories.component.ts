import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productcategories',
  templateUrl: './productcategories.component.html',
  styleUrls: ['./productcategories.component.css']
})
export class ProductcategoriesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToCategory(category: string): void {
    this.router.navigate(['/home/categories', category]);
  }

}
