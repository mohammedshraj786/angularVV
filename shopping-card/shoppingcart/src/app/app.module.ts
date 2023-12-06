import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { ComponentsRoutingModule } from './components/components-routing.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddNewProductsComponent } from './pages/addNewProducts/add-new-products/add-new-products.component';
import { authRoutingModule } from './auth/auth-routing.module';
import { GetAllProductsComponent } from './components/get-all-products/get-all-products.component';
import { ProductcategoriesComponent } from './pages/productcategories/productcategories.component';
import { ProfilepageComponent } from './auth/profilepage/profilepage.component';
import { GetspecificProductComponent } from './components/getspecific-product/getspecific-product.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    AddNewProductsComponent,
    GetAllProductsComponent,
    ProductcategoriesComponent,
    ProfilepageComponent,
    GetspecificProductComponent
  ],
  imports: [
    BrowserModule,
  BrowserAnimationsModule,
    AppRoutingModule,
    ComponentsRoutingModule,
    HttpClientModule,
    FormsModule,
    authRoutingModule,
    ToastrModule.forRoot(),
    MatAutocompleteModule,
    MatButtonModule,
    // MatSnackBarModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
