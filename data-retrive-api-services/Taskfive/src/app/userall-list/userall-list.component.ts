import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AjayService } from '../ajay.service';
 
@Component({
  selector: 'app-userall-list',
  templateUrl: './userall-list.component.html',
  styleUrls: ['./userall-list.component.css'],
  providers:[AjayService]
})
export class UserallListComponent implements OnInit 
{
  displayedColumns:string[]=['name','username','email','website','actions']
  userList:any[]=[];
  showDetails=false;
  selectedUser:any=null;
  constructor(private httpClient:HttpClient,public ajay:AjayService) 
  {
    this.userList=[];
  }

  ngOnInit(): void {
    this.getUserList();
  }



getUserList()
{
  this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe((result:any)=>{
  this.userList = result;
  } ) 
}

showUserDetails(user: any):void {
  this.selectedUser = user;
  this.showDetails=true;
}
  goBack(): void {
    this.showDetails = false;
    this.selectedUser = null;
  }

}
