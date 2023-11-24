import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SingUpComponent } from './sing-up/sing-up.component';

const routes: Routes = [
  {
    path:'signup',component:SingUpComponent
  },
  {
    path:'login' , component:LoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
