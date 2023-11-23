import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Student1Component } from './student1/student1.component';
import { Student2Component } from './student2/student2.component';

const routes: Routes = [
  {path:'',redirectTo:'student1'},
  {path:'student1',component:Student1Component},
  {path:'student2',component:Student2Component}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
