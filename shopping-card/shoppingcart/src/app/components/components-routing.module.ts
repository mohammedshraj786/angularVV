import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AddNewProductsComponent } from "../pages/addNewProducts/add-new-products/add-new-products.component";
import { ProductcategoriesComponent } from "../pages/productcategories/productcategories.component";
import { AdminAuthGuard } from "./component.guard";
import { GetAllProductsComponent } from "./get-all-products/get-all-products.component";
import { ProfilepageComponent } from "../auth/profilepage/profilepage.component";
import { GetspecificProductComponent } from "./getspecific-product/getspecific-product.component";
const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent, 
        children: [
            {path:'allproduct' , component:GetAllProductsComponent},
            { path: 'addproduct', component: AddNewProductsComponent , canActivate:[AdminAuthGuard] },
            {path:'categories' , component:ProductcategoriesComponent },
            { path: 'categories/:category', component: GetspecificProductComponent},
            {path:'profile' , component:ProfilepageComponent}
        ]
    }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentsRoutingModule {}
