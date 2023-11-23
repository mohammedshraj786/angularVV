import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { Student1Component } from './student1/student1.component';
import { Student2Component } from './student2/student2.component';


@NgModule({
  declarations: [Student1Component, Student2Component],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
