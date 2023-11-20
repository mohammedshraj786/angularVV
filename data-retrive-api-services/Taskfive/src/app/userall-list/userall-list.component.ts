import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-userall-list',
  templateUrl: './userall-list.component.html',
  styleUrls: ['./userall-list.component.css']
})
export class UserallListComponent implements OnInit 
{
  displayedColumns:string[]=['name','username','email','website','actions']
  userList:any[]=[];
  showDetails=false;
  selectedUser:any=null;
  constructor(private httpClient:HttpClient) 
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
