import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserallListComponent } from './userall-list/userall-list.component';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { UserDetailsComponent } from './user-details/user-details.component'
import { AjayService } from './ajay.service';
@NgModule({
  declarations: [
    AppComponent,
    UserallListComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [AjayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
