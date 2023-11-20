import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Test } from './test.component';
import { Testone } from './test2.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    Test,Testone, HomeComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [Test]
})
export class AppModule { }
