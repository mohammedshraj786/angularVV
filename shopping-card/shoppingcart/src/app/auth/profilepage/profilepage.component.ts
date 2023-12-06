import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';
import { Router} from '@angular/router';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})
export class ProfilepageComponent implements OnInit {
  user: any;
  isEditMode: boolean = false;

  constructor(private userService: UserService ,  private toastr: ToastrService ,private router:Router ) { }

  ngOnInit(): void {
    const userId = localStorage.getItem('id');
    console.log('user id for profile:', userId);

    if (userId) {
      this.userService.getUsersData().subscribe((users: any[]) => {
        this.user = users.find(user => user.id === Number(userId));
        console.log(this.user);
      });
    }
  }

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }

  updateProfile(): void {
    this.userService.updateUserData(this.user.id, this.user).subscribe((updatedUser) => {
      console.log('Profile updated successfully:', updatedUser);
      
      this.isEditMode = false;
      this.showUpdateSuccess();
      setTimeout(()=>{
        this.router.navigate(['home/profile'])
      },500)
    });
  }
  showUpdateSuccess():void{
    this.toastr.success('Updated Successfully' , 'profile',{
      timeOut:3000,
    })
  }
}
