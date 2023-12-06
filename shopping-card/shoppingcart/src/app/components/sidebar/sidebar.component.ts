import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/auth/user.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isAdmin: boolean = false;
  isLoggedIn: boolean = false;
  loggedInUserName: string = '';

  constructor(private router: Router , private toastr: ToastrService ,private userService: UserService ) { 
    const isAdminvalue = localStorage.getItem('isAdmin');
    console.log('admin:', isAdminvalue);
    
    const isLoggedInvalue = localStorage.getItem('isLoggedIn');
    console.log('isloggedIn value', isLoggedInvalue);
    
    this.isAdmin = isAdminvalue === 'true';
    this.isLoggedIn = isLoggedInvalue === 'true';

    const userId = localStorage.getItem('id');
    if (userId) {
      this.userService.getUsersDataById(Number(userId)).subscribe((userData: any) => {
        this.loggedInUserName = userData.name;
      });
    }
  }

  ngOnInit(): void {
    // this.showSuccess()
  }

  logout(): void {
    localStorage.clear();
    this.loggedInUserName = ''; 
    this.isLoggedIn = false; 
    this.isAdmin = false;
    
    this.showLoginSuccess();
    setTimeout(()=>{

      this.router.navigate(['/home/allproduct']);
      // window.location.reload();
    },500)
  }
  showLoginSuccess():void{
    console.log('Working');
    
    this.toastr.success('Logout successfully', 'Logout',{
      timeOut:3000,
    });
    

   }
}
