import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PostComponent } from './post/post.component';
import { StudentModule } from './student/student.module';

const appRoutes:Routes = [

  {
    path:'' , component: HomeComponent,
  },
  {
    path:'student',
    loadChildren:()=>import('src/app/student/student.module').then((mod)=>mod.StudentModule)
  },
  {
    path:'about' , component : AboutComponent 
  },
  {
    path:'contact' , component : ContactUsComponent
  },
  {
    path:'post' , component : PostComponent
  },
  {
    path:'**' , component: PostComponent,
  },
 
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
