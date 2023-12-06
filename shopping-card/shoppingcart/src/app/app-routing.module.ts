import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AddNewProductsComponent } from './admin/addNewProducts/add-new-products/add-new-products.component';

const routes: Routes = 
[
  // {path:'addproduct' , component:AddNewProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
