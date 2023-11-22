import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule , Routes } from '@angular/router';
import { PostComponent } from './post/post.component';

const appRoutes:Routes = [
  {
    path:'' , component: HomeComponent
  },
  {
    path:'about' , component : AboutComponent
  },
  {
    path:'contact' , component : ContactUsComponent
  },
  {
    path:'post/:id' , component : PostComponent
  }
]
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
